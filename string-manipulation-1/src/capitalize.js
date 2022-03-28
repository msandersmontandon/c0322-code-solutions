/* exported capitalize */

/** pseudocode for capitalize
 * 1. make the function definition for capitalize() with 1 paramether: word;
 * 2. declare a variable upperCase to hold the first letter of the word string;
 * 3. set upperCase to upper case;
 * 4. delcare a variable lowerCase to hold the rest of the word string;
 * 5. set lowerCase to lower case;
 * 6. return the concatenation of upperCase with lowerCase.
 */

function capitalize(word) {
  var upperCase = word.at(0);
  upperCase = upperCase.toUpperCase();
  var lowerCase = word.slice(1, word.length);
  lowerCase = lowerCase.toLowerCase();
  return upperCase + lowerCase;
}
