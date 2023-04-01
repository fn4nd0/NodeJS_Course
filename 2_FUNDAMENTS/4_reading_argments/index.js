//name -> node index.js name=Fernando age=32

const args = process.argv.slice(2)

const name = args[0].split('=')[1]
const age = args[1].split('=')[1]

console.log(`His/her name is ${name} and his/her is ${age} years old!`)
