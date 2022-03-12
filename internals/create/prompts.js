const types = require('./types.json')

module.exports = [
  {
    type: 'list',
    name: 'type',
    message: "Select the type of feature you're creating:",
    choices: types,
  },
  {
    type: 'input',
    name: 'name',
    message: 'What do you wanna call it?',
    default: 'amazing-stuff',
    transformer(input) {
      return input.toLowerCase()
    },
    validate(input) {
      if (/\s/g.test(input)) {
        return 'Component name must not contain any space'
      }

      if (/^[^a-zA-Z-]+$/g.test(input)) {
        return 'Component name must not contain any special characters'
      }

      if (/\d/g.test(input)) {
        return 'Component name must not contain any digits'
      }

      return true
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'How you describe this component?',
    default: 'A simple component',
    when: ({ type }) => type === 'component',
  },
  {
    type: 'confirm',
    name: 'hasStyles',
    message: '💅 Wanna put some styles in it?',
    default: true,
    when: ({ type }) => type === 'page',
  },
]
