const fs = require('fs')
const path = require('path')

//getting the arguments into variables
const folder = process.argv[2]
const extension = '.' + process.argv[3]

//using a callback function
fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  // for each file matching the extension of the current file's extension
  files.forEach(function (file) {
    if (path.extname(file) === extension) {
      console.log(file)
    }
  })
})