let result = 0

// arg at i=0 is node, arg at i=1 file name, hence from i=2
for (let i = 2; i < process.argv.length; i++) {
// using parseInt to convert the strings to numbers
  result += parseInt(process.argv[i])
}

console.log(result)