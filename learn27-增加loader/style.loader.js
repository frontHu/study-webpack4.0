function loader(source) {
  let style = `
    let style = document.createElement('style')
    style.innerHTML = ${JSON.stringify(source)}
    document.head.appendChild(stype)
  `
  return style
}

module.exports = loader