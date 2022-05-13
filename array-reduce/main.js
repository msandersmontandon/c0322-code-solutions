const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((p, c) => p + c);
console.log('\nsum:', sum);
const product = numbers.reduce((p, c) => p * c);
console.log('\nproduct:', product);
const balance = account.reduce((p, c) => {
  switch (c.type) {
    case 'deposit':
      p += c.amount;
      break;
    case 'withdrawal':
      p -= c.amount;
      break;
  }
  return p;
}, 0);
console.log('\nbalance:', balance);
const composite = traits.reduce((p, c) => {
  for (const key in c) {
    p[key] = c[key];
  }
  return p;
}, {});
console.log('\ncomposite:', composite);
