const path = require('path')

// absolute path
console.log(path.resolve('test.txt'))

// making a path
const midFolder = 'reports'
const fileName = 'fernando.txt'

const finalPath = path.join('/', 'files', midFolder, fileName)

console.log(finalPath)