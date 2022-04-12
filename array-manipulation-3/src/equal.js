/* exported equal */

/** pseudocode for equal
 * 1. make the function definition for equal() with 2 paramethers: first and second;
 * 2. make an if statement to guard against the case of the lengths of the both paramethers mismatching;
 * 3. if they do mismatch, return from the function the boolean value of false;
 * 4. else, use a for loop to iterate through the indexes of the first paramether;
 * 5. then use an if statement to check if the value at the current indexes of the first parameter:
 * 6. mismatches the value at the current index of the second paramether;
 * 7. if they do mismatch, return from the function the boolean value of false;
 * 8. then, after both the if statement and the for loop, return the boolean value of true.
 */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
