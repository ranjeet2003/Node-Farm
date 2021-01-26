const EventEmitter = require('events');

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
