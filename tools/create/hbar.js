const handlebars = require('handlebars')

handlebars.registerHelper('let', function (varName, varValue, options) {
  options.data.root[varName] = varValue
})

handlebars.registerHelper('camelCase', function (aString) {
  if (!aString.indexOf('-')) {
    return aString
  }

  let componentName = aString

  componentName = componentName
    .split('-')
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.substr(1, word.length)
    )
    .join('')

  return componentName
})

handlebars.registerHelper('componentName', function (aString) {
  if (!aString.indexOf('-')) {
    return aString[0].toUpperCase() + aString.substr(1, aString.length)
  }

  let componentName = aString

  componentName = componentName
    .split('-')
    .map((word) => word[0].toUpperCase() + word.substr(1, word.length))
    .join('')

  return componentName
})

module.exports = handlebars
