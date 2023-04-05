const fs = require('fs')

if (!fs.existsSync('./myFolder')) {
    console.log("doesn't exist")
    fs.mkdirSync('./myFolder')
} else {
    console.log("already exists")
}
