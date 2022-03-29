/* exported compact */

/** pseudocode for compact
 * 1. make the function definition for compact() with 1 paramether: array;
 * 2. declare a new variable compactArray and assign to it an empty array;
 * 3. with a for loop, iterates through all indexes of the array paramether starting at the first one;
 * 4. with an if statement, check if the array item at current index is truthy. If it is:
 * 5. append it to the end of compactArray;
 * 6. after the end of the loop, return compactArray.
 */

function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
}
