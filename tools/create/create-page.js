const fs = require('fs')
const path = require('path')
const hbar = require('./hbar')
const templates = require('./templates')

const createPage = (name, hasStyles) => {
  const { page } = templates

  const tsx = hbar.compile(page.script)
  const scss = hbar.compile(page.style)
  const spec = hbar.compile(page.test)
  const index = hbar.compile(page.index)

  let newViewPath = path.resolve(__dirname, '../../pages/', name)

  fs.mkdirSync(newViewPath)

  fs.writeFileSync(`${newViewPath}/${name}.tsx`, tsx({ name, hasStyles }))

  if (hasStyles) {
    fs.writeFileSync(`${newViewPath}/${name}.module.scss`, scss({ name }))
  }

  fs.writeFileSync(`${newViewPath}/${name}.spec.tsx`, spec({ name }))
  fs.writeFileSync(`${newViewPath}/index.tsx`, index({ name }))
}

module.exports = createPage
