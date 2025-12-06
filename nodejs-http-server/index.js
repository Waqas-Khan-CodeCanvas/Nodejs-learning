const http = require("http");
const { url } = require("inspector");
// console.log(http.STATUS_CODES)
// console.log(http.METHODS[0])
// console.log(http)

// http.createServer((req , res )=>{
//     res.write("hello from server...");
//     res.end();
// }).listen(3000 , ()=> console.log("server is running ... on 3000"))

http
  .createServer((req, res) => {
    // const contentType = req.headers['content-type']
    // console.log("url is :",req.url)
    // console.log("url is :",req.headers.host)
    // const newUrl = new URL(req.url,`http://${req.headers.host}`);
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);
    const method = req.method;
    const contentType = req.headers["content-type"] || "";
    console.log(
      `path : ${pathname} \n method : ${method} \n contentType : ${contentType}`
    );

    if(method === "OPTIONS"){
        res.writeHead(204 , {
            "access-control-allow-origin":"*",
            "access-control-allow-methods":"GET , POST , PUT , PATCH , DELETE, OPTIONS",
            "access-control-allow-headers":"content-Type"
        })
        return res.end()
    }



    switch (contentType) {
      case "text/html":
        if (method === "GET" && pathname === "/") {
          res.write("<h1>hello from text/html</h1>");
          break;
        };
        if (method === "GET" && pathname === "/users"){
            res.write("<h3>here is all users data </h3>");
        }
      case "application/json":
        res.write(JSON.stringify({ message: "hello from application/json" }));
        break;

      default:
        res.write("plesase send your request with proper header contentType");
        break;
    }
    res.end();
  })
  .listen(3000, () => console.log("server is running..."));
