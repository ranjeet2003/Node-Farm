const fs = require('fs');

setTimeout(() => console.log('Timer 1 is finished'), 0);
setImmediate(() => console.log('Immediate 1 is finished'));

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
});

console.log('Hello from top level code');
