const child = require('child_process')
const inquirer = require('inquirer')
//const chalk = require('chalk')
const prompts = require('./prompts')
const createComponent = require('./create-component')
const createPage = require('./create-page')

// const log = console.log

inquirer.prompt(prompts).then(({ type, description, name, hasStyles }) => {
  switch (type) {
    case 'component':
      createComponent(name, description)
      break
    case 'page':
      createPage(name, hasStyles)
      break
    default:
      throw new Error('Invalid Type')
  }

  /*log(`
  ${chalk.yellow('🚨 Linter: checking...')}
      `)*/
  child.execSync('npm run lint:scripts')
  child.execSync('npm run lint:styles')
  /*log(`
  ${chalk.green('Done.')}
      `)

  log(`
  ${chalk.blue('++++++++++++++++++++++++++++++++++++++++++++++')}
  ${chalk.green(`You successfully created ${chalk.yellow(`${name}/`)}!`)} 🎉🎉🎉
  ${chalk.blue('++++++++++++++++++++++++++++++++++++++++++++++')}
  ${
    type === 'component'
      ? `
  ${chalk.bold.black.bgYellow('QUICK NOTE')}:
  Don't forget to include your component in our stylguide: ${chalk.bold.blue(
    'fixtures/stylguide/componentsList.ts'
  )}
  `
      : ''
  }
`)*/
})
