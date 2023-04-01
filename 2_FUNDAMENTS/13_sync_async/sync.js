const fs = require('fs')

console.log("Start")

fs.writeFileSync('file.txt', "Hi there")

console.log("End")