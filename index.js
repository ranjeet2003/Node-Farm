const fs = require('fs');
const http = require('http');
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

const server = http.createServer((req, res) => {
    console.log(req);
    console.log('\n');
    console.log(res);
    res.end('Hello from server');
})

server.listen(8000, '127.0.0.1',()=>{
    console.log('Server is hosting on port 8000');
})