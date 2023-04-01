import inquirer from "inquirer"
import chalk from "chalk"


try {

    let name
    let age

    await inquirer.prompt([
            {
                name: "q1",
                message: "Whats your name? "
            },
            {
                name: "q2",
                message: "Whats your age? "
            }
        ]).then((answers) => {

            name = answers.q1;
            age = answers.q2;

            if (!name || !age) {
                throw new Error("You need to inform the name and the age!")
            }

            
        }).catch( (e) => {
            console.log(chalk.bgRed.black(e))
        })

    let situation

    if (age >= 18) {
        situation = "adult"
    } else {
        situation = "underage"
    }

    console.log(chalk.bgYellow.black(`Hello ${name}, your are an ${situation}`))


} catch (e) {
    console.log(chalk.bgRed.black(e))
}
