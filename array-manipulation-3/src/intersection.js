/* exported intersection */
/* global unique */

/** pseudocode for intersection
 * 1. make the function definition for intersection() with 2 paramethers: fisrt and second;
 * 2. declare the intersectedArray variable and assign an empty array literal to it;
 * 3. declare the firstUnique variable and assign to it the array returned from the function unique called with the first paramether as an argument;
 * 4. declare the secondUnique variable and assign to it the array returned from the function unique called with the second paramether as an argument;
 * 5. use a for loop to iterate through the indexes of the firstUnique array;
 * 6. then, use an if statement to check if the secondUnique array includes the value at the current index of the firstUnique array;
 * 7. if it does indeed, append to the end of the intersectedArray array the value at the current index of the firstUnique array;
 * 8. then, after the end of both the if statement and the forr loop, return from the function the value of the intersectedArray variable.
 */

function intersection(first, second) {
  var intersectedArray = [];
  var firstUnique = unique(first);
  var secondUnique = unique(second);
  for (var i = 0; i < firstUnique.length; i++) {
    if (secondUnique.includes(firstUnique[i])) {
      intersectedArray.push(firstUnique[i]);
    }
  }
  return intersectedArray;
}
