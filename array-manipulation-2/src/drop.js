/* exported drop */

/** pseudocode for drop
 * 1. make the function definition for drop() with 2 arguments: array, count;
 * 2. declare a variable dropArray and assign an empty array to it;
 * 3. using a for loop, iterate through the indexes of the array paramether after the (count paramether) first indexes;
 * 4. append to the end of the dropArray array the value at the current index of the array paramether;
 * 5. after the end of the for loop, return from the function the value of the dropArray variable.
 */

function drop(array, count) {
  var dropArray = [];
  for (var i = count; i < array.length; i++) {
    dropArray.push(array[i]);
  }
  return dropArray;
}
