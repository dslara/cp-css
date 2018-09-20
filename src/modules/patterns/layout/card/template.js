
const template = (data) => {
  if (Object.keys(data).length === 0) {
    return ''
  }
  return `
    <div>${data}</div>
  `
}

export default template
