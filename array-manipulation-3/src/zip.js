/* exported zip */

/** pseudocode for zip
 * 1. make the function definition for zip() with 2 paramethers: first and second;
 * 2. declare the variable zipArray and assign an empty array literal to it;
 * 3. declare the variable zipLength and assing the lesser between the length properties of the first and second paramethers;
 * 4. use a for loop to iterate through indexes from 0 up to zipLength;
 * 5. push into the zipArray array an array with a pair of values, each from the current indez of the first and second paramethers;
 * 6. after the end of the for loop, return from the function the value fo the zipArray variable.
 */

function zip(first, second) {
  var zipArray = [];
  var zipLength = Math.min(first.length, second.length);
  for (var i = 0; i < zipLength; i++) {
    zipArray.push([first[i], second[i]]);
  }
  return zipArray;
}
