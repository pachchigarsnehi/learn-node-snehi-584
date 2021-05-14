const fs = require('fs')

// taking the first argument which is the filename
const contents = fs.readFileSync(process.argv[2])
// splitting the file content by new line and will make an array with all lines, get length and -1
const lines = contents.toString().split('\n').length - 1
console.log(lines)
