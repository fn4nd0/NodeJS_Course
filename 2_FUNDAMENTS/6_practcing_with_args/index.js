const minimist = require('minimist')

// external
const args = minimist(process.argv.slice(2))


// internal
const sum = require('./sum').sum

const a = parseInt(args['a'])
const b = parseInt(args['b'])

// run the command: node index.js --a=3 --b=4
sum(a, b)
