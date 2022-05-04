const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const [, , x, operation, y] = process.argv;

switch (operation) {
  case 'plus':
    console.log('result:', add(x, y));
    break;
  case 'minus':
    console.log('result:', subtract(x, y));
    break;
  case 'times':
    console.log('result:', multiply(x, y));
    break;
  case 'over':
    console.log('result:', divide(x, y));
    break;
  default:
    console.log('invalid operation');
}
