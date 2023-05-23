const fs = require("fs");

fs.writeFileSync("file.txt", "Hello World", (err) => {
  if (err) throw err;
  console.log("File created and written successfully");
});

fs.readFile("file1.txt", "utf8", (err, data) => {
  // console.log(new Error(err));
  console.log(data); //Hello World
});

const buff = Buffer.from("Hello Developers");
console.log(buff); //<Buffer 48 65 6c 6c 6f 20 44 65 76 65 6c 6f 70 65 72 73>
console.log(buff.toString()); //Hello Developers
