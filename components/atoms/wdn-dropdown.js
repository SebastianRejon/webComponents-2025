
class WdnDropdown extends HTMLElement {
    static get observedAttributes() {
        return ['visible'];
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
        // this._setupEventListeners();
    }
    disconnectedCallback() {
        // this._cleanupEventListeners(); ver problema aqui
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'visible') {
            this._updateVisibility(newValue === 'true');
        }
    }
    // _setupEventListeners() { }
    _cleanupEventListeners() { }
    _handleAttributeChange(name, value) { }
    // metodo cambia visibilidad
    _updateVisibility(isVisible) {
        const lista = this.shadowRoot.querySelector('.lista');
        if (lista) {
            // Cambia la clase CSS o el estilo directamente
            if (isVisible) {
                lista.classList.remove('lista-oculta');
            } else {
                lista.classList.add('lista-oculta');
            }
        }
    }
    render() {
        this.shadowRoot.innerHTML = /*html*/ `
        <style>
            :host{
                display:block;
                font-size: var(--font-size-large);
                font-family: var(--wdn-font-family);
                height:var(--altura);
            }
            p{
                margin:0;
            }
            .lista{
                width: 200px;
                height: 200px;
                background-color:blue;
                position:absolute;
                transform:translate(-100%, 100px);

            }
            .lista-oculta{
                width: 200px;
                height: 200px;
                background-color:blue;
                position:absolute;
                transform:translate(-100%, -200%);

            }
        </style>
        <div class="lista" id="lista" visible="false">
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
            </ul>
        </div>
        `;
    }
}
customElements.define("wdn-dropdown", WdnDropdown);
export default WdnDropdown;