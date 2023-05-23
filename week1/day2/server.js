const http = require("http"); //common.js
// import http from "http"; //es6

const PORT = 3001;

const server = http.createServer();
server.on("request", function (req, res) {
  console.log(req.url);

  if (req.url === "/") {
    req.statusCode = 200;
    res.end("Hello");
  } else if (req.url === "/hello") {
    req.statusCode = 200;
    res.end("<h1>Hello World</h1>");
  } else if (req.url === "/categories") {
    req.statusCode = 200;
    res.end("<ul><li>Category1</li><li>Category2</li></ul>");
  }
});

server.on("listening", function () {
  console.log(`Server is running on ${PORT}`);
});
server.listen(PORT);
