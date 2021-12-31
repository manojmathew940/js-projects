// Learning tutorial
const {readFile, writeFile} = require('fs')

console.log("started first task")
// READ file is async. It will run the full code and only after that run this contents inside.
// The function gets off loaded
readFile('../content/first.txt', 'utf-8', (err, result) => {
  if (err){
    console.log("Displaying Error")
    console.log(err)
    return
  }
  console.log(result)
  console.log("Completed logging result")
})

console.log("starting next task")

// Will continue to run since it is setInterval
setInterval(()=>{
  console.log("hello world")
}, 2000)