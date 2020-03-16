const http = require('http');
const express = require('express');
const ws = require('ws');

const app = express();

// we need to create our own http server so express and ws can share it.
const server = http.createServer(app);
// pass the created server to ws
const wss = new ws.Server({ server });

let rooms = {};
let allSockets = new Set();

class Room {
  constructor(name) {
    this.name = name;
    this.clients = new Set();
    console.log('new room:', name)
    this.id = 0;
  }
  join (client) {
    this.clients.add(client);
  }
  leave (client) {
    this.clients.delete(client);
    this.updated();
  }
  updated() {
    for (let client of this.clients) {
      client.socket.send(JSON.stringify({
        type: 'update',
        data: [...this.clients].map(p => p.data)
      }));      
    }
  }
}

class Client {
  constructor (socket) {
    this.socket = socket;
    this.room = null;
    this.data = {};
    
    this.socket.on('close', () => {
      if (this.room) {
        this.room.leave(this);
        this.room = null;
      }
    });
    this.socket.on('message', e => this.handleMessage(e));
  }
  handleMessage(msg) {
    try {
      msg = JSON.parse(msg);
    } catch (e) {
      return;
    }
    if (msg.type === 'join') {
      if (msg.room in rooms) {
        rooms[msg.room].join(this);
      } else {
        rooms[msg.room] = new Room(msg.room);
        rooms[msg.room].join(this);
      }
      this.room = rooms[msg.room];
    }
    if (msg.type === 'update') {
      Object.assign(this.data, msg.data);
      if (this.room) {
        this.room.updated();
      }
    }
  }
}

// based on https://www.npmjs.com/package/ws#simple-server
wss.on('connection', function connection(ws) {
  let client = new Client(ws);
  allSockets.add(ws);

  ws.on('message', function incoming(message) {
    if (message === 'ping') return;
  });
  
  ws.on('close', function () {
    allSockets.delete(ws);
  });
});


app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'].indexOf('https') === -1) {
    return res.redirect(`https://${req.header('host')}${req.url}`);
  }
  return next();
});
 
app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/join', function(request, response) {
  response.redirect(`/r/${request.query.room}?name=${request.query.name}`)
});

app.get('/r/:room', function(request, response) {
  response.sendFile(__dirname + '/views/room.html');
});

// listen for requests!
const listener = server.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
