const http = require("http");

console.log(http);

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log("Request received");
  console.log("I request to " + req.url);

  if (req.url == "/") {
    console.log("This is main path");
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello Node</h1>");
    res.end();
  } else if (req.url == "/hello") {
    console.log("Hello");
    // res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello Developers</h1>");
    res.end();
  }
});

server.on("listening", () => {
  console.log("Sever is running on 3000");
});

server.listen(3000);
