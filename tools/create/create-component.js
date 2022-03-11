const fs = require('fs')
const path = require('path')
const hbar = require('./hbar')
const templates = require('./templates')

const createComponent = (name, description) => {
  const { component } = templates

  const tsx = hbar.compile(component.script)
  const scss = hbar.compile(component.style)
  const spec = hbar.compile(component.test)
  const index = hbar.compile(component.index)

  let newComponentPath = path.resolve(__dirname, '../../components/', name)

  fs.mkdirSync(newComponentPath)

  fs.writeFileSync(
    `${newComponentPath}/${name}.tsx`,
    tsx({ name, description })
  )
  fs.writeFileSync(`${newComponentPath}/${name}.module.scss`, scss({ name }))
  fs.writeFileSync(`${newComponentPath}/${name}.spec.tsx`, spec({ name }))
  fs.writeFileSync(`${newComponentPath}/index.tsx`, index({ name }))
}

module.exports = createComponent
