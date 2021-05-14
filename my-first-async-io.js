const fs = require('fs')
const file = process.argv[2]

//reading file, passing a call back function.
// if it has content, the same logic as previous
// A callback is a function passed as an argument to another function.
fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
})