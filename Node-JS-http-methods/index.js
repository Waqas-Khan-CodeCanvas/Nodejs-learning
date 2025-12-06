const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const dataTime = new Date().toLocaleString();
  const myurl = url.parse(req.url, true);
  console.log(myurl);
  const incommingRequestLog = `DateTime : ${dataTime} , HostName : ${req.headers.host} , pathname : ${myurl.pathname} \n`;
  fs.appendFile("log.txt", incommingRequestLog, (err, data) => {
    switch (myurl.pathname) {
      case "/":
        res.end("Home page");
        break;

      case "/about":
        const name = myurl.query.name;
        // TODO: database operations here .
        res.end(`About page this is ${name}`);
        break;

      case "/search":
        const searchQurey = myurl.search;
        console.log(searchQurey)
        // TODO: database operations here .
        res.end(`your search query is : ${searchQurey}`);
        break;

      case "/signup":
        if (req.method === "GET" && myurl.pathname === "/signup") {
          res.end("here is a signUp page");
           break;
        } 
        else if (req.method === "POST" && myurl.pathname === "/signup") {
          const { email, password } = myurl.query;
          // TODO: database operations here .
          res.end(`signup data is  email is : ${email} , password is : ${password}`);
          break;
        }

      default:
        res.end("404 Page Not Found.");
        break;
    }
  });
});

server.listen(3000, () => console.log("server is running ..."));
