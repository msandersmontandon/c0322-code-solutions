/* exported tail */

/** pseudocode for tail
 * 1. make the function definition for tail() with 1 paramether: array;
 * 2. declare a new variable tailArray and assign an empty array to it;
 * 3. use a for loop to iterate through each but the first of the array paramether indexes, starting at the second one;
 * 4. append the item of the array paramether at the current index to the tailArray variable;
 * 5. After the end of the for loop, return the value of the tailArray variable.
 */

function tail(array) {
  var tailArray = [];
  for (var i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}
