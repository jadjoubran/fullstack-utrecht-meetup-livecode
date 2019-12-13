import { LitElement, html } from "lit-element";

export default class AppEdit extends LitElement {
  render() {
    return html`
      <h2>App Edit</h2>
    `;
  }
}

window.customElements.define("app-edit", AppEdit);
