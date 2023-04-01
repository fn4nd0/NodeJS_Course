const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Whats your favorite language? ", (language) => {

    if (language === "PHP")
        console.log("Your mother is ashamed!")
    else {
        console.log(`My favorite language is ${language}`)
    }
    
    readline.close();
})