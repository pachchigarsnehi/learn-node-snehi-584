//importing the module
const filterFunc = require('./mymodule.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

// using the functon that we import, the filterFunc. Passing FilterStr
filterFunc(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})