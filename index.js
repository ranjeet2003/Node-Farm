const fs = require("fs");
const http = require("http");
const url = require("url");
// //Blocking synchronous
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `About avocado:${textIn}.`;
// fs.writeFileSync('./txt/Output.txt', textOut);
// console.log('File Written');
// Non bloacking asynchronous code

// fs.readFile('./txt/start.txt', 'utf-8', (err, data)=> {
//     console.log(data);
// })
// console.log('Reading file in background');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is overview");
  } else if (pathName === "/product") {
    res.end("this is the product");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is hosting on port 8000");
});
