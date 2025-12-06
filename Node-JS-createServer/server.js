const http = require("http");
const fs  = require("fs");
const { join } = require("path");
const { json } = require("stream/consumers");

const server = http.createServer((req , res)=>{
    const dataTime = new Date().toLocaleString() ;
    const incommingRequestLog =  `DateTime : ${dataTime} , HostName : ${req.headers.host} , pathname : ${req.url} \n`
    fs.appendFile("log.txt" , incommingRequestLog  , (err , data)=>{
       switch (req.url) {
        case "/":
            res.end("Home page")
            break;
       
        case "/about":
            res.end("About page this is waqas khan")
            break;
       
        default:
            res.end("404 Page Not Found.")
            break;
       }
    })    

})

server.listen(3000 , ()=> console.log("server is running ..."))