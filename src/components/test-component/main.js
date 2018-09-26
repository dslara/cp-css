
import config from './config'
import data from './data.json'
import template from './template'

const elementName = `${config.name}`

class PatternMenu extends HTMLElement {

  constructor() {
    super()
    this._root = this.createShadowRoot({ mode: 'open' })
    this._data = data
  }

  static get observedAttributes() { return [config.attributes.data]; }

  set data(data) {
    if (this._data === data) return
    this._data = data
    this._render()
  }

  get data() {
    return this._data
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._render();
  }

  connectedCallback() {
    this._render()
  }

  _render() {
    this._root.innerHTML = template(this._data)
  }
}

window.customElements.define(elementName, PatternMenu)

export default PatternMenu
