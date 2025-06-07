const http = require("http");
const path = require("path");
const fs = require("fs");

console.log(__dirname);
console.log(__filename);

const filepath = path.join("folder", "student", "data.txt");
console.log(filepath);

const parsData = path.parse(filepath);
const resolvepath = path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);

// console.log({
//   parsData,
//   resolvepath,
//   extname,
//   basename,
//   dirname,
//   seprator: path.sep,
// });

// ---------------http and fs------------------

// http
//   .createServer((req, res) => {
//     res.write("Zeeshan Khan ");
//     res.end();
//   })
//   .listen(3000);

http
  .createServer((req, res) => {
    // create file

    // fs.appendFile("hello.txt", "Hello Zeeshan", (err) => {
    //   if (err) throw err;
    //   console.log("file create");
    // });

    // Reade file

    fs.readFile("hello.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });

    // Update File

    // fs.appendFile("hello.txt", "Hello Zeeshan Khan, How are you .", (err) => {
    //   if (err) throw err;
    //   console.log("file updated");
    // });

    // Rename File

    // fs.rename("hello.txt", "hi.txt", (err) => {
    //   if (err) throw err;
    //   console.log("File Name Changed");
    // });

    // delete file

    // fs.unlink("hi.txt", (err) => {
    //   if (err) throw err;
    //   console.log("File deleted");
    // });
  })
  .listen(5000);
