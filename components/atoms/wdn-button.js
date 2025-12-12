class WdnButton extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this._handleClick = this._handleClick.bind(this); // Enlazar this
    }

    connectedCallback() {
        this.render();
        this._setupEventListeners(); 
    }

    disconnectedCallback() {
        this._cleanupEventListeners();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this._handleAttributeChange(name, newValue);
        }
    }
    _setupEventListeners() {
        const button = this.shadowRoot.querySelector('#dropdown');
        if (button) {
            button.addEventListener('click', this._handleClick);
        }
    }
    _handleClick(event) {
        console.log("tocado!!!!", event.target);
        // Aquí puedes añadir tu lógica:
        // - Cambiar un estado interno
        // - Emitir un evento personalizado al exterior:
        this.dispatchEvent(new CustomEvent('wdn-button-clicked', {
            bubbles: true,
            composed: true,
            detail: { id: 'dropdown' }
        }));
    }
    _cleanupEventListeners() {
        const button = this.shadowRoot.querySelector('#dropdown');
        if (button) {
            button.removeEventListener('click', this._handleClick);
        }
    }
    
    _handleAttributeChange(name, value) { }
    
    render() {
        this.shadowRoot.innerHTML = /*html*/ `
        <style>
            :host{
                display:block;
                font-size: var(--font-size-large);
                font-family: var(--wdn-font-family);
            }
            .estilo{
                height:100#;
                width:100%;
                font-size:var( --font-size-large);
                height:var(--altura-btn);
            }
        </style>
        <button class="estilo" id="dropdown">Socorro</button>
        `;
    }
}

customElements.define("wdn-button", WdnButton);
export default WdnButton;
