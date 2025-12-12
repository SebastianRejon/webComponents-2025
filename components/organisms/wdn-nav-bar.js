
class WdnNavBar extends HTMLElement{
    static get observedAttributes() {
    return ['attribute-one', 'attribute-two'];
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
    if (oldValue !== newValue) {
    this._handleAttributeChange(name, newValue);
    }
    }
    // _setupEventListeners() { }
    _cleanupEventListeners() { }
    _handleAttributeChange(name, value) { }
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
            .container{
                width:100%;
                height:100%;
                background-color: var(--wdn-bg-section);
            }
            .container{
                display:flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
        </style>
        <div class="container">
            <slot></slot>
        </div>
        `;
    }
}
customElements.define("wdn-nav-bar", WdnNavBar);
export default WdnNavBar;
