const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

// run in command line: node index.js --name=Fernando profession=Developer

// console.log(args)

const name = args['name']
const profession = args['profession']

console.log(`His name is ${name} and his profession is ${profession}`)