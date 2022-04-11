/* exported flatten */

/** pseudocode for flatten
 * 1. make the function definition for flatten() with 1 paramether: array;
 * 2. declare the flattenArray variable and assgin an empty array literal to it;
 * 3. use a for loop to iterate through the i indexes of the array paramether;
 * 4. then use an if statement to check if the value at the current i index of the array paramether is an array;
 * 5. if it is, use a for loop to iterate through the j indexes of the array at the current i index of the array paramether;
 * 6. then push into the flattenArray array the value at the current j index of the array at the current i index of the array paramether;
 * 7. then after the end of that for loop, and in the case the prior if statement condition was false, use an else statement to then:
 * 8. push into the flattenArray array the value at the current i index of the array paramether;
 * 9. then after the end of that else statement and of the for loop, return from the function the value of the flattenArray variable;
 */

function flatten(array) {
  var flattenArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        flattenArray.push(array[i][j]);
      }
    } else {
      flattenArray.push(array[i]);
    }
  }
  return flattenArray;
}
