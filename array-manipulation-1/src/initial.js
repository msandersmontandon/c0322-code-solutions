/* exported initial */

/** pseudocode for initial
 * 1. make the function definition for initial() with 1 paramether: array;
 * 2. declarae a new variable initialArray and assign an empty array to it;
 * 3. use a for loop to iterate through each but one indexes of the array paramether, starting at the first and going to the next-to-last;
 * 4. append each item of the array paramether at the index to the variable initialArray;
 * 5. After the end of the for loop, return the value of the variable initialArray.
 */

function initial(array) {
  var initialArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i]);
  }
  return initialArray;
}
