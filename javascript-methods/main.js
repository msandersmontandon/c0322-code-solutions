var x = 14;
var y = -14;
var z = 29;
var maximumValue = Math.max(x, y, z);
console.log('maximumValue:', maximumValue);

var heroes = ['Hawkey', 'Animal-man', 'Mumen Rider', 'Phatom Stranger'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('radomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    name: 'Ethics, Demonstrated in Geometrical Order',
    author: 'Baruch Spinoza'
  },
  {
    name: 'Tree and Leaf',
    author: 'J. R. R. Tolkien'
  },
  {
    name: 'Seconds: A Graphic Novel',
    author: 'Bryan Lee O\'Malley'
  }
];
var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);
var js = {
  name: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  name: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Matheus Sanders Montandon';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
