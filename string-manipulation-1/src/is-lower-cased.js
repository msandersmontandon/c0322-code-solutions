/* exported isLowerCased */

/** pseudocode for isLowerCase
 * 1. make the function definition for isLowerCase() with 1 paramether: word;
 * 2. have an if statement to check if the lower cased word differs from the word;
 * 3. if it does, return false;
 * 4. else, return true.
 */

function isLowerCased(word) {
  if (word.toLowerCase() !== word) {
    return false;
  }
  return true;
}
