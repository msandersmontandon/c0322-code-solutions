function reduce(array, reducer, initialValue) {
  let result = array[0];
  let index = 1;
  if (arguments.length === 3) {
    result = initialValue;
    index = 0;
  }
  for (; index < array.length; index++) {
    result = reducer(result, array[index]);
  }
  return result;
}

// Test of the reduce() function

console.log(reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], (p, c) => p + c));

console.log(reduce([
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
], (p, c) => {
  switch (c.type) {
    case 'deposit':
      p += c.amount;
      break;
    case 'withdrawal':
      p -= c.amount;
      break;
  }
  return p;
}, 0));
