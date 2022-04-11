/* exported difference */
/* global unique */

/** pseudocode for difference
 * 1. make the function definition for difference() with 2 paramethers: first and second;
 * 2. declare the variable differenceArray and assign an empty array literal to it;
 * 3. declare the variable firstUnique and assign to it the array returned from the function unique() with the first paramether as an argument;
 * 4. declare the variable secondUnique and assign to it the array returned from the function unique() with the second paramether as an argument;
 * 5. use a for loop to iterate through the indexes of the firstUnique array;
 * 6. then use an if statement to check if the value at the current index of the firstUnique array isn't already present in the secondUnique array;
 * 7. if it isn't, append to the end of the differenceArray the value at the current index of the firstUnique array;
 * 8. then, after the end of that if statement and of that for loop, use another for loop to iterate through the indexes of the secondUnique aray;
 * 9. then use an if statement to check if the value at the current index of the secondUnique array isn't already present in the firstUnique array;
 * 10. if it isn't, append to the end of the differenceArray the value at the current index of the secondUnique array;
 * 11. then, after the end of that if statement and of that for loop, return from the function the value of the differenceArray variable.
 */

function difference(first, second) {
  var differenceArray = [];
  var firstUnique = unique(first);
  var secondUnique = unique(second);
  for (var i = 0; i < firstUnique.length; i++) {
    if (!secondUnique.includes(firstUnique[i])) {
      differenceArray.push(firstUnique[i]);
    }
  }
  for (i = 0; i < secondUnique.length; i++) {
    if (!firstUnique.includes(secondUnique[i])) {
      differenceArray.push(secondUnique[i]);
    }
  }
  return differenceArray;
}
