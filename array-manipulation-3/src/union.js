/* exported union */
/* global unique */

/** pseudocode for union
 * 1. make the function definition for union() with 2 paramethers: first and second;
 * 2. declare the unionArray variable and assign to it the array returned from the function unique called with the first paramether as an argument;
 * 3. declare the variable secondUnique and assign to it the array returned from the function unique called with the second paramenther as an argument;
 * 4. use a for loop to iterate through the indexes of the secondUnique array;
 * 5. then use an if statement to check if the value at the current index of the secondUnique array isn't already included in the unionArray array;
 * 6. if it isn't, append to the end of the unionArray array the value at the current index of the secondUnique array;
 * 7. Then, after the end of both the if statement and the for loop, return from the function the value of the unionArray variable.
 */

function union(first, second) {
  var unionArray = unique(first);
  var secondUnique = unique(second);
  for (var i = 0; i < secondUnique.length; i++) {
    if (!unionArray.includes(secondUnique[i])) {
      unionArray.push(secondUnique[i]);
    }
  }
  return unionArray;
}
