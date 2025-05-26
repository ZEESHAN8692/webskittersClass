const http = require("http");
const path = require("path");
const fs = require("fs");
const { error } = require("console");

// console.log(path);

// http
//   .createServer((req, res) => {
//     res.write("hello world");
//     res.end();
//   })
//   .listen(3005);

// http
//   .createServer((req, res) => {
//     fs.readFile("hello.html", (err, data) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//     // fs.appendFile("zeeshan.txt", "Hello Zeeshan", (err) => {
//     //   if (err) throw err;
//     //   console.log("saved");
//     // });

//     // fs.appendFile("zeeshan.txt", "This is my text", (err) => {
//     //   if (err) throw err;
//     //   console.log("Updated");
//     // });

//     // fs.unlink("zeeshan.txt", (err) => {
//     //   if (err) throw err;
//     //   console.log("Deleted");
//     // });

//     fs.rename("zeeshan.txt", "zeeshankhan.txt", (err) => {
//       if (err) throw err;
//       console.log("file name change");
//     });
//   })
//   .listen(5000);

// http
//   .createServer((req, res) => {
//     res.write("Hello World");
//     res.end();
//   })
//   .listen(3000);

http
  .createServer((req, res) => {
    fs.readFile("hello.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });

    // Create File
    // fs.appendFile("hello.txt", "This is text text file", (err) => {
    //   if (err) throw error;
    //   console.log("File Save");
    // });

    // Add text file

    // fs.appendFile("hello.txt", "Hello  this size Zeeshan ", (err) => {
    //   if (err) throw err;
    //   console.log("File Update ");
    // });

    // Rename file name

    // fs.rename("hello.txt", "hello1.txt", (err) => {
    //   if (err) throw err;
    //   console.log("File name Change ");
    // });

    fs.unlink("zeeshankhan.txt", (err) => {
      if (err) throw err;
      console.log("File deleted");
    });
  })
  .listen(5000);
