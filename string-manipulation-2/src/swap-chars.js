/* exported swapChars */

/** pseudocode for swapChars
 * 1. make the function definition for swapChars() with 3 paramethers: firstIndex, secondIndex and string;
 * 2. declare the variable swaptString and assign to it an empty string;
 * 3. use a for loop to iterate through the length indexes of the string paramether;
 * 4. using an if statement, check if the current index is strictly equal to the firstIndex paramether;
 * 5. if it is, concatenate the value of swaptString with the character at the (secondIndex paramether)-nth index of the string paramether, then:
 * 6. assign the result of that expression to the swaptString variable;
 * 7. else, check if the current index is strictly equal to the secondIndex paramether;
 * 8. If it is, concatenate the value of swaptString with the character at the (firstIndex paramether)-nth index of the string paramether, then:
 * 9. assign the result of that expression to the swaptString variable;
 * 10. else, concatenate the value of swaptString with the character at the current index of the string paramether, then:
 * 11. assign the result of that expression to the swaptString variable;
 * 12. after the end of the for loop, return from the function the value of the swaptString variable.
 */

function swapChars(firstIndex, secondIndex, string) {
  var swaptString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swaptString += string.at(secondIndex);
    } else if (i === secondIndex) {
      swaptString += string.at(firstIndex);
    } else {
      swaptString += string.at(i);
    }
  }
  return swaptString;
}
