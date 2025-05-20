const http = require("http");
const path = require("path");
const fs = require("fs");

// console.log(path);

// http.createServer((req,res)=>{
//     res.write('hello world')
//     res.end()
// }).listen(3005)

http
  .createServer((req, res) => {
    fs.readFile("hello.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
    // fs.appendFile("zeeshan.txt", "Hello Zeeshan", (err) => {
    //   if (err) throw err;
    //   console.log("saved");
    // });

    // fs.appendFile("zeeshan.txt", "This is my text", (err) => {
    //   if (err) throw err;
    //   console.log("Updated");
    // });

    // fs.unlink("zeeshan.txt", (err) => {
    //   if (err) throw err;
    //   console.log("Deleted");
    // });

    fs.rename("zeeshan.txt", "zeeshankhan.txt", (err) => {
      if (err) throw err;
      console.log("file name change");
    });
  })
  .listen(5000);
