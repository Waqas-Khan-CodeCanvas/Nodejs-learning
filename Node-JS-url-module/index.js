const http = require("http");
const fs  = require("fs");
const url = require("url");

const server = http.createServer((req , res)=>{
    const dataTime = new Date().toLocaleString() ;
    const myurl = url.parse(req.url, true)
    console.log(myurl)
    const incommingRequestLog =  `DateTime : ${dataTime} , HostName : ${req.headers.host} , pathname : ${myurl.pathname} \n`
    fs.appendFile("log.txt" , incommingRequestLog  , (err , data)=>{
       switch (myurl.pathname) {
        case "/":
            res.end("Home page")
            break;
       
        case "/about":
            const name = myurl.query.name;
            const searchQurey = myurl.query.search;
            res.end(`About page this is ${name}`)
            break;
       
        default:
            res.end("404 Page Not Found.")
            break;
       }
    })    

})

server.listen(3000 , ()=> console.log("server is running ..."))