export class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode:'open' });
    }

    static get observedAttributes() {
        return ['img', 'titl', 'price', 'description', 'collection'];
    }

    attributeChangedCallback(attr, oldVal, newVal) {
        if (attr === "img") {
          this.img = newVal;
        }
        if (attr === "titl") {
          this.titl = newVal;
        }
        if (attr === "price") {
          this.price = newVal;
        }
        if (attr === "description") {
          this.description = newVal;
        }
        if (attr === "collection") {
          this.collection = newVal;
        }
    }

    getStyles() {
        return `
            <style>
            :host{
                --primary-bg: #5a6cb2;
                width: 90%;
                max-width: 900px;
                min-width: 280px;
            }
            
            .container {
                position: relative;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                width: 900px;
                height: 600px;
                margin: 20px;
                background-color: #fff;
            }
            
            .container .imgBox{
                position: relative;
                display: flex;
                justify-content: center;
                width: 50%;
                height: 100%;
                background-color: var(--primary-bg);
            }
            
            .container .imgBox:before {
                position: absolute;
                top: 20px;
                left: 20px;
                font-size: 3em;
                font-weight: 800;
                color: #000;
                content: "Nike";
                opacity: 0.1;
            }
            
            .container .imgBox img{
                position: relative;
                top: 100px;
                left: -50px;
                width: 720px;
                height: 480px;
                transform: rotate(-30deg);
            }
            
            .container .details{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                height: 100%;
                box-sizing: border-box;
                padding: 80px;
            }
            
            .container .details h2{
                margin-bottom: 25px;
                font-size: 2.5em;
                line-height: 0.8em;
                color: #444;
            }

            .container .details button{
                margin-top: 35px;
                float: right;
                padding: 15px 20px;
                font-size: 16px;
                color: #fff;
                letter-spacing: 1px;
                font-weight: 600;
                text-transform: uppercase;
                border-radius: 40px;
                background-color: #5a6cb2;
                cursor: pointer;
            }

            @media (max-width: 1023px) {
                .container{
                    height: auto;
                    width: auto;
                }

                .container .imgBox{
                    padding: 40px;
                    width: 100%;
                    box-sizing: border-box;
                    height: auto;
                    text-align: center;
                }

                .container .imgBox img{
                    width: 430px;
                    top:80px;
                    height: auto;
                    transform: rotate(-38deg);
                }

                .container .details{
                    width:100%;
                    height: auto;
                    padding: 20px;
                }

                .container .details p{
                    max-width: 100%;
                    margin-left: 0;
                }
            }
            </style>
        ` 
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <main class="container">
                <section class="imgBox">
                    <img src="${
                        this.img
                      }" alt="Zapatos deportivos para correr color azul"/>
                </section>
                <section class="details">
                    <div class="content">
                        <h2>${this.titl} <span>${this.collection}</span></h2>
                        <p>${this.description}</p>
                        <h3>${this.price}</h3>
                        <button>Comprar</button>
                    </div>
                </section>
            </main>
            ${this.getStyles()}
        `;
        return template;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() {
        this.render();
    }
}
customElements.define('product-card', ProductCard);