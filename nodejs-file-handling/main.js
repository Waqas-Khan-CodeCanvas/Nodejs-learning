console.log("File handling in nodejs")
const fs = require("fs");
const { resourceLimits } = require("worker_threads");

// console.log("fs", fs)

// write and creatation operations.
// sync... call
// fs.writeFileSync("./test.txt","hello from node js")

// async ... call
fs.writeFile('./test.txt' , "hello from modejs async... call" , (err)=>{console.log(err)})


// readfile operations
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result)

fs.readFile("./contact.txt","utf-8", (err , result)=>{
    if (err) {
        console.log("readfile error : ", err)
    }else{
        console.log("readfile result : ", result)
    }
})


fs.appendFileSync("./contact.txt",  `hey there \n`)

// fs.mkdirSync("newFolder")
// fs.cpSync()
// fs.Stats()
// fs.unlinkSync