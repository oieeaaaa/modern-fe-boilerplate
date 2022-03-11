const path = require('path')
const fs = require('fs')

const fileToString = (location) => fs.readFileSync(location).toString()

const componentPath = (fileName) =>
  path.resolve(__dirname, '../templates/component/', `${fileName}.hbs`)

const pagePath = (fileName) =>
  path.resolve(__dirname, '../templates/page/', `${fileName}.hbs`)

module.exports = {
  component: {
    script: fileToString(componentPath('component')),
    style: fileToString(componentPath('component.module')),
    test: fileToString(componentPath('component.spec')),
    index: fileToString(componentPath('index')),
  },
  page: {
    script: fileToString(pagePath('page')),
    style: fileToString(pagePath('page.module')),
    test: fileToString(pagePath('page.spec')),
    index: fileToString(pagePath('index')),
  },
}
