/* exported takeRight */

/** pseudocode for takeRight
 * 1. make the function definition for takeRight() with 2 paramethers: array and count;
 * 2. declare a variable arrayRight and assign an empty array to it;
 * 3. make a guarded if statement for the case in which the count paramether is larger than the length of the array paramether;
 * 4. if it is, assign the adress of the array paramether to the arrayRight paramether;
 * 5. else, use a for loop to iterate through the last (count paramether) indexes of the array paramether;
 * 6. append to the end of the arrayRight array the value at the current index of the array paramether;
 * 7. after the end of the loop and the else statement, return from the function the value of the arrayRight variable.
 */

function takeRight(array, count) {
  var arrayRight = [];
  if (count > array.length) {
    arrayRight = array;
  } else {
    for (var i = array.length - count; i < array.length; i++) {
      arrayRight.push(array[i]);
    }
  }
  return arrayRight;
}
