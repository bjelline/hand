import { html, Component } from "htm/preact";
import { createRef } from "preact";
import { If, Else } from './If';
import REACTIONS from './reactions';

const reactions = Object.entries(REACTIONS);

function pack (a, b, c, d, n, s) {
  let r1 = a/b;
  let closest = 0;
  let minWaste = Infinity;
  for (let rowsize = 1; rowsize <= n; rowsize++) {
    let cols = Math.ceil(n / rowsize);
    let width = rowsize * (c + s) + s;
    let height = cols * (d + s) + s;
    let r3 = width / height;
    let waste = Math.abs(r3 - r1);
    if (waste < minWaste) {
      closest = rowsize;
      minWaste = waste;
    }
  }
  return closest;
}

export default class App extends Component {
  constructor(props) {
    super(props);
    let inviteURL = new URL(window.location);
    inviteURL.pathname = '/r/' + this.props.room;
    this.state = {
      status: null,
      connected: false,
      editing: false,
      name: props.name || null,
      participants: [],
      size: 0,
      inviteURL: inviteURL,
      height: window.innerHeight + 'px'
    };
    this.safety = 0;
    this.input = createRef();
    this.holder = createRef();
    this.props.socket.on('close', e => this.setState({ connected: false }));
    this.props.socket.on('open', e => {
      this.setState({ connected: true })
      this.props.socket.send({
        type: 'join',
        room: this.props.room
      });
      this.props.socket.send({
        type: 'update',
        data: {
          name: this.state.name,
          status: this.state.status
        }
      });
    });
    this.props.socket.on('message', e => this.handleMessage(e));
    window.addEventListener('resize', e => {
      this.setState({ height: window.innerHeight + 'px' });
      this.getSize()
    });
  }
  handleMessage(msg) {
    try {
      msg = JSON.parse(msg);
    } catch (e) {
      console.warn(e);
      return;
    }
    if (msg.type === 'update') {
      this.setState({ participants: msg.data });
    }
  }
  setStatus(status) {
    this.setState({ status });
    this.props.socket.send({
      type: 'update',
      data: { status }
    });
  }
  clearStatus() {
    this.setState({ status: null });
    this.props.socket.send({
      type: 'update',
      data: { status: null }
    });
  }
  changeName(name) {
    this.setState({ name, editing: false });
    this.props.socket.send({
      type: 'update',
      data: { name }
    });
  }
  copyInvite(e) {
    e.preventDefault();
    if (this.invite.current) {
      this.invite.current.select();      
      document.execCommand("copy");
      console.log('copied invite link');
    }
  }
  getSize() {
    if (this.safety < 100000 && this.holder.current) {
      let boxWidth = this.holder.current.offsetWidth;
      let boxHeight = this.holder.current.offsetHeight;
      let count = this.state.participants.filter(p=>p.status).length;
      if (count && boxHeight) {
        let cols = pack(boxWidth, boxHeight, 4, 3, count, 1);
        let rows = Math.ceil(count / cols);
        let size = Math.min(boxWidth / cols / 9, boxHeight / rows / 7);
        if (size !== this.state.size) {
          this.safety++;
          this.setState({
            size: size,
          });
        }
      }
    }
  }
  componentDidUpdate() {
    this.getSize();
    if (this.input.current && this.state.editing) {
      this.input.current.select();
    }
  }
  componentDidMount() {
    this.getSize();
    if (this.input.current && this.state.editing) {
      this.input.current.select();
    }
  }
  render({ room }, { participants=[], connected, size, inviteURL, height="100%", name, editing }) {
    return html`
      <div class="app host" style="height:${height}">
        <header>
          <div class="room">
            <div><b>${name}</b> in #<b>${room}</b></div>
            <button class="link"
                    onClick=${e => this.setState({ name, editing: true })}>
              ${name ? "change name" : "set your name"}
            </button>
          </div>
          <${If} condition=${connected}>
            <div class="connection connected">
              <span>✅ connected</span>
            </div>
            <${Else}>
              <div class="connection connecting">
                🔌 connecting
              </div>
            </>
          </>
        </header>
        <div class="stats">
          <div class="count">
            🗣×${participants.length}
            
          </div>
          ${reactions.map(([name, icon]) => html`
            <div>${icon}×${participants.filter(p=>p.status===name).length}</div>
          `)}
        </div>
        <div class="participants" ref=${this.holder}>
          <div class="layout" style="font-size:${size}px">
            ${participants.filter(p => p.status).map(p => html`
              <div class="participant">
                <div class="participant-status">${p.status ? REACTIONS[p.status] : ''}</div>
                <div class="participant-name">${p.name}</div>
              </div>
            `)}
          </div>
        </div>
        <div class="reactions">
          ${reactions.map(([name, icon]) => html`
            <button class="${status === name ? 'current' : ''}"
                    onClick=${e => this.setStatus(name)}>
              ${icon}
            </button>
          `)}
          <button class="clear"
                  onClick=${e => this.clearStatus()}>
            clear
          </button>
        </div>
        <${If} condition=${editing}>
          <div class="dialog">
            <h3>set your name</h3>
            <input class="edit-name"
                   type="text"
                   ref=${this.input}
                   value=${name}
                   placeholder="enter name"
                   onKeyPress=${e => e.key === "Enter" && this.changeName(e.target.value)}
                   onBlur=${e => this.changeName(e.target.value)} />
          </div>
        </>
      </div>
    `;
  }
}
