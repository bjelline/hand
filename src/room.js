import { render, html } from "htm/preact";
import FriendlyWebSocket from "./websocket";
import App from './App';

let room = (window.location.pathname.split('/').pop()).toLowerCase();

let name = null;
if (window.location.search) {
  let params = new URLSearchParams(window.location.search);
  name = params.get('name');
}
let socket = new FriendlyWebSocket();

render(html`<${App} socket=${socket} room=${room} name=${name}/>`, document.body);
