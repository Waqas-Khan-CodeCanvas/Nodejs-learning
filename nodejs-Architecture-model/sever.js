console.log("server")

const fs = require("fs");

// blocking task  or synchronus
// console.log("1")
// const result = fs.readFileSync("./users.txt", "utf-8");
// console.log(result)

// console.log("2")


// non-blocking task  or asynchronus
console.log("1")
fs.readFile("./users.txt", "utf-8", (err , result)=>{
    if (err){
        console.log("here is an error")
    }else{
        console.log(result)
    }
});

console.log("2") 
console.log("3") 
console.log("4") 