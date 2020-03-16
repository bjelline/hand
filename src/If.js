import { html, Component } from "htm/preact";

export class If extends Component {
  render({ condition, children }) {
    if (!(children instanceof Array)) {
      children = [children];
    }
    if (condition) {
      return children.filter(c => c.type !== Else); 
    }
    return children.filter(c => c.type === Else); 
  }
}

export class Else extends Component {
  render({ children }) {
    return children;
  }
}