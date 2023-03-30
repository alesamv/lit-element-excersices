import { LitElement, html, css } from 'lit';
import './login-lit'

class SimpleLogin extends LitElement {
  static get properties() {
    return {
      success: { type: Boolean }
    };
  }

  static get styles(){
    return css`
      login-lit {
        display: flex;
        position: absolute;
        right: 38%;
        top: 10%
      }
  `;
  }

  _hiddenLogin() {
    this.success = true;
  }
  
  render() {
    return html`
      ${ this.success 
        ? html`<h1>Welcome!</h1>`
        : html`<login-lit @sign=${ this._hiddenLogin }></login-lit>`}     
    `;
  }
}

customElements.define('simple-login', SimpleLogin);