const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('\nevenNumbers:', evenNumbers);
const overFive = numbers.filter(n => n > 5);
console.log('\noverFive:', overFive);
const starWithE = names.filter(s => s[0] === 'E');
console.log('\nstarWithE:', starWithE);
const haveD = names.filter(s => s.includes('D') || s.includes('d'));
console.log('\nhaveD:', haveD);
