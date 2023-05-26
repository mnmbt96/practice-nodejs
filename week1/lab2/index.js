import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const html = `
      <h1>Hello Node!</h1>
      <a href="http://localhost:8000/read-message">Read Message</a>
      <a href="http://localhost:8000/write-message">Write Message</a>
    `;
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } else if (req.url === "/read-message") {
    fs.readFile("messages.txt", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end("Error reading the message file");
      } else {
        const html = `
          <h1>Read Message</h1>
          <p>${data}</p>
        `;
        res.setHeader("Content-Type", "text/html");
        res.end(html);
      }
    });
  } else if (req.url === "/write-message") {
    if (req.method === "GET") {
      const html = `
        <h1>Write Message</h1>
        <form action="/write-message" method="post">
          <input type="text" name="message" placeholder="Enter your message">
          <button type="submit">Submit</button>
        </form>
      `;
      res.setHeader("Content-Type", "text/html");
      res.end(html);
    } else if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });
      req.on("end", () => {
        const message = decodeURIComponent(body.split("=")[1]);
        fs.appendFile("messages.txt", message + "\n", (err) => {
          if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end("Error writing the message");
          } else {
            res.statusCode = 302;
            res.setHeader("Location", "/read-message");
            res.end();
          }
        });
      });
    }
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

server.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
