
import data from './data.json'
import template from './template'

class PatternCard extends HTMLElement {

  constructor() {
    super()
    this._data = data
    this._attr = 'content'
  }

  connectedCallback() {
    this.data = this.getAttribute(this._attr) || 'Default Value';
    this.render();
  }

  render() {
    this.innerHTML = template(this.data)
  }
}

window.customElements.define('p-card', PatternCard)

export default PatternCard
