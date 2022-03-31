/* exported take */

/** pseudocode for take
 * 1. make the function definition for take() with 2 paramethers: array and count;
 * 2. declare a variable takeArray and assing an empty array to it;
 * 3. using a for loop, iterate through the indexes of the array paramether until either:
 * 4. the (count paramether)-th index or the (length)-th index, whichever comes first;
 * 5. append to the end of the takeArray array the value at the current index of the array paramether;
 * 6. after the end of the for loop, return from the function the value of the takeArray variable.
 */

function take(array, count) {
  var takeArray = [];
  for (var i = 0; i < count && i < array.length; i++) {
    takeArray.push(array[i]);
  }
  return takeArray;
}
