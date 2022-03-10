const inquirer = require('inquirer')
const questions = require('./questions')

const prompter = (_, commit) => {
  const commitAnswers = (answers) => {
    commit([`${answers.type}:`, answers.message].filter((x) => !!x).join(' '))
  }

  inquirer.prompt(questions).then(commitAnswers)
}

module.exports = { prompter }
