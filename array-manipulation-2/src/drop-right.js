/* exported dropRight */

/** pseudocode for dropRight
 * 1. make the function definition for dropRight() with 2 paramethers: array and count;
 * 2. declare a variable arrayDropRight and assign an empty array to it;
 * 3. use a for loop to iterate through the indexes of the array paramether from the first index until either:
 * 4. the (count paramether)-nth from the last index or the last index itself of the array paramether, whichever comes first;
 * 5. append to the end of the arrayDropRight array the value at the current index of the array paramether;
 * 6. after the end of the for loop, return from the function the value of the arrayDropRight variable.
 */

function dropRight(array, count) {
  var arrayDropRight = [];
  for (var i = 0; i < array.length - count && i < array.length; i++) {
    arrayDropRight.push(array[i]);
  }
  return arrayDropRight;
}
