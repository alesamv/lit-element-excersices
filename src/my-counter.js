import { LitElement, html, css } from 'lit-element';
import './feedback-element'

export class MyCounter extends LitElement {
    static get properties() {
        return {
            counter: { type: Number }
        };
    }

    constructor() {
        super();
        this.counter = 0;
    }

    get feedback() {
        return this.shadowRoot.getElementById('feedback');
    }

    incrementar() {
        this.counter++;

        if(this.counter ==5) {
            this.feedback.open('Has llegado a 5 clics')
        }
    }

    decrementar() {
        this.counter--;

        if(this.counter ==0) {
            this.feedback.open('Has reseteado los clics')
        }
    }

    render() {
        return html`
            <div>Llevas ${this.counter} clics! </div>
            <div>
                <button @click=${this.incrementar}>+1</button>
                <button @click=${this.decrementar}>-1</button>
            </div>
            <feedback-element id="feedback"></feedback-element>
        `;
    }
}
customElements.define('my-counter', MyCounter);