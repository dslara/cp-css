
import config from './config'
import style from './style'

const template = (data) => {
  if (Object.keys(data).length === 0) {
    return ''
  }
  return `
    ${style}
    <div class="${config.name}" test="${data.bool}">
      <h1>${data.str}</h1>
      <ul>
        ${data.arr.map((item) => `<li>${item}</li>`).join(' ')}
      </ul>
      <input type="number" placeholder="${data.num}">
      <div>${data.obj.keyOne}</div>
      <span>${data.obj.keyTwo}</span>
    </div>
  `
}

export default template
