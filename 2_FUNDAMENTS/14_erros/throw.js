// const x = "100"
const x = 100

//check if x is a number
if (!Number.isInteger(x)) {
    //This ends the program execution
    throw new Error("Invalid x value. It is not a int number")
}

console.log("Continuing the code")