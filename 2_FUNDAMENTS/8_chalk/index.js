const chalk = require("chalk")

const grade = 5


if (grade >= 7) {
    console.log(chalk.green.bold(`Congratulations! You have been approved!`))
} else {
    console.log(chalk.bgRed.black('You need to take the make-up test'))
}