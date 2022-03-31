/* exported includes */

/** pseudocode for includes
 * 1. make the function definition for includes() with 2 paramethers: array value;
 * 2. declare a variable includesValue and assign the value of false to it;
 * 3. using a for loop, iterate through the indexes of the array paramether;
 * 4. use an if statement, check if the value at the current index of the array paramether is strictly equal to the value paramether;
 * 5. if that's the case, assign the value of true to the includesValue variable;
 * 6. After the end of the for loop, return from the function the value of the includesValue variable.
 */

function includes(array, value) {
  var includesValue = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      includesValue = true;
    }
  }
  return includesValue;
}
