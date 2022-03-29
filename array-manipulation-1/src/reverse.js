/* exported reverse */

/** pseudocode for reverse
 * 1. make the function definition for reverse() with 1 paramether: array;
 * 2. declare a new variable reverseArray and assign an empty array to it;
 * 3. use a for loop to iterate through each index of the array paramether;
 * 4. add, in turn, each element of the array at the current index to the begining of the reverseArray variable;
 * 5. after the for loop has finished, return the value of the reverseArray variable.
 */

function reverse(array) {
  var reverseArray = [];
  for (var i = 0; i < array.length; i++) {
    reverseArray.unshift(array[i]);
  }
  return reverseArray;
}
