const chalk = require("chalk")

const score = 8


if (score >= 7) {
    console.log(chalk.green.bold(`Congratulations! You have been approved!`))
} else {
    console.log(chalk.bgRed.black('You need to take the make-up test'))
}