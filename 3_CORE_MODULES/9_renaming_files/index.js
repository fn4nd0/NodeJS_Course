const fs = require('fs')

const old_file = "file.txt"
const new_file = "new_file.txt"

fs.rename("file.txt", "new_file.txt", function(err) {

    if(err) {
        console.log(err)
        return
    }

    console.log(`The file ${old_file} was renamed to ${new_file}`)

})