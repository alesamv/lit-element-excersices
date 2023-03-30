import { LitElement, html, css } from 'lit';
import './components/get-data'

class RickMortyApi extends LitElement {
  static get properties() {
    return {
      wiki: { type: Array }
    }
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .container {
        text-align: center;
      }

      get-data {
        display: none;
      }

      .card {
        background: #fff;
        border-radius: 2px;
        display: inline-block;
        height: 300px;
        width: 200px;
        margin: 1rem;
        position: relative;
        text-align: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-beizer(.25, .8, .25, 1);        
      }

      .card:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.24)
      }

      .card img {
        width: 70%;

      }
  `;
  }

  constructor() {
    super();
    this.wiki = [];
    this.addEventListener('ApiData', e => {
      this._dataFormat(e.detail.data)
    });
  }

  _dataFormat(data) {
    let characters = [];

    data["results"].forEach( character => {
      characters.push({
        img: character.image,
        name: character.name,
        species: character.species,
        status: character.status
      })
    });

    this.wiki = characters;
  }

  render() {
    return html`
      <get-data url="https://rickandmortyapi.com/api/character" method="GET"></get-data>
      ${this.dateTemplate}
    `;
  }

  get dateTemplate() {
      return html`
        ${this.wiki.map(character => html`
          <div class="card">
            <div class="card-content">
              <h2>${ character.name }</h2>
              <img src="${character.img}">
              <p>${character.species} | ${character.status}</p>
            </div>
          </div>`)}
      `;
  }
}

customElements.define('rick-morty-api', RickMortyApi);