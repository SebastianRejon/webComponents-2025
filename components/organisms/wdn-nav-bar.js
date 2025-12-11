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
    _setupEventListeners() { }
    _cleanupEventListeners() { }
    _handleAttributeChange(name, value) { }
    render() {
        this.shadowRoot.innerHTML = `
        <style>
            :host{
                display:block;
                background: var(--color-primary);
                font-size: var(--font-size-large);
                paddign:var(--padding-general);
            }
            .contanier{
                width:100%;
                heigth:5rem;
                border:2px solid black;
            }
        </style>
        <div class="container">
        <p>algo</p>
        </div>
        `;
        }
}
customElements.define("wdn-nav-bar", WdnNavBar);
export default WdnNavBar;