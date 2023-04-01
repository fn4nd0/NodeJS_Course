const fs = require('fs')

console.log("Start")

fs.writeFile("file.txt", "Yoooo", function(err) {
    setTimeout(function() {
        console.log("File created!")
    }, 2000)
})

console.log("End")