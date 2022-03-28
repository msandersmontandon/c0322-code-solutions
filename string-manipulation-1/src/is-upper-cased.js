/* exported isUpperCased */

/** pseudocode for isUpperCased
 * 1. make the function definition for isUpperCased() with 1 paramether: word;
 * 2. have an if statement to check if the upper cased word differs from the word;
 * 3. if it does, return false;
 * 4. else, return true.
 */

function isUpperCased(word) {
  if (word.toUpperCase() !== word) {
    return false;
  }
  return true;
}
