const { Console } = require('console');
const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('There was a new sale');
});

myEmitter.on('newSale', () => {
  console.log('Customer name: Ranjeet');
});

myEmitter.on('newSale', (stock) => {
  console.log(`There are only ${stock} left in sale`);
});

myEmitter.emit('newSale', 9);

////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(' request recieved ');
  res.end('Request Recieved');
});

server.on('request', (req, res) => {
  console.log('Another request 😂');
});

server.close('close', (req, res) => {
  console.log('Server is closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for request...');
});
