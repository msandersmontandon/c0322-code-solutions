var student = {
  firstName: 'Matheus',
  lastName: 'Sanders Montandon',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Amazon Flex Worker';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Volkswagen',
  model: 'Beetle',
  year: 1963
};

vehicle['color'] = 'eggshell';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Luppy',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
