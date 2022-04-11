/* exported unique */

/** pseudocode for unique
 * 1. make the function definition for unique() with 1 paramether: array;
 * 2. declare the variable uniqueArray and assign an empty array literal to it;
 * 3. use a for loop to iterate through the indexes of the array paramether;
 * 4. use an if statement to check if the value at the current index of the array paramether is not yet present in the uniqueArray array;
 * 5. if it isn't, push the value at the current index of the array paramether into the uniqueArray array;
 * 6. then, after both the if statement and the for loop, return from the function the value of the uniqueArray variable;
 */

function unique(array) {
  var uniqueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}
