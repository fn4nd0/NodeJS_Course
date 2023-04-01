// some values
const x = 10
const y = "Fernando"
const z = [2, 3]

console.log(x, y, z)

// count of prints
console.count(`The value of x is: ${x}, counting`)
console.count(`The value of x is: ${x}, counting`)
console.count(`The value of x is: ${x}, counting`)

// variable between strings
console.log("The name is %s, and he is a Developer", y)
console.log(`He is not ${x} years old`)

// cleaning the console
setTimeout(() => {
    console.clear();
}, 3000)