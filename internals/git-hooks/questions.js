const emojiTypes = require('./emojiTypes')

module.exports = [
  {
    type: 'list',
    name: 'type',
    message: "Select the type of change you're committing:",
    choices: emojiTypes,
  },
  {
    type: 'input',
    name: 'message',
    message: 'Git commit message (required):\n',
    validate(input) {
      if (!input) {
        return 'empty commit message'
      }
      return true
    },
  },
]
