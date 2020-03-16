import { render, html } from "htm/preact";
import FriendlyWebSocket from "./websocket";
import App from './host/App';

let room = (window.location.pathname.split('/').pop()).toLowerCase();

let socket = new FriendlyWebSocket();

render(html`<${App} socket=${socket} room=${room}/>`, document.body);
