// const inquirer = require('inquirer')
import inquirer from "inquirer"

inquirer.prompt([
    {
        name: 'p1',
        message: 'How much did you score in your first exam?'
    }, 
    {
        name: 'p2',
        message: 'What was your second score?'
    }
]).then((answers) => {
    console.log(answers)
    const average = ( (parseInt(answers.p1)+parseInt(answers.p2))/2)

    console.log(`The average is: ${average}`)
}).catch(err => {
    console.log(err)
})