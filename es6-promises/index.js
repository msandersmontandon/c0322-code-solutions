const takeAChance = require('./take-a-chance');
const promise = takeAChance('Matheus');

promise.then(value => {
  console.log(value);
}).catch(error => {
  console.log(error.message);
});
