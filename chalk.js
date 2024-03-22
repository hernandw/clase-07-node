/* const chalk = require('chalk'); */
/* import chalk from 'chalk'; */
const chalk = require('chalk');
console.log(chalk.blue('Hello World!'))
console.log(chalk.red('Hello World!' + chalk.underline.bgBlue('Hello World!')))

const log = console.log;

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
log(chalk.hex("#DEADED").bold.italic("Bold gray!"));

log(chalk.hex("#DEADED").bgRed.bold("Hello world!"));