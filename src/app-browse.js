import { LitElement, html, css } from "lit-element";

class AppBrowse extends LitElement {
  static get styles() {
    return css`
      h2 {
        color: red;
      }
      .card {
        background-color: white;
        padding: 20px;
        margin: 20px;
      }
    `;
  }
  firstUpdated() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.bikes = data;
        this.requestUpdate();
      });
  }
  render() {
    if (!this.bikes) {
      return html`
        Loading..
      `;
    }
    return html`
      <h2>Browse page</h2>
      ${this.bikes.map(bike => {
        return html`
          <div class="card">${bike.name}</div>
        `;
      })}
    `;
  }
}

window.customElements.define("app-browse", AppBrowse);
