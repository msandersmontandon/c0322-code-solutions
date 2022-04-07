/* exported reverseWords */

/** pseudocode for reverseWords
 * 1. make the function definition for reverseWords() with 1 paramether: string;
 * 2. declare a variable wordsArray and assign to it an array of strings split from the string paramether at the empty spaces;
 * 3. declare a variable reverseString and assign an empty string to it;
 * 4. using a for loop, iterate through the wordIndex indexes of the wordsArray array;
 * 5. using another for loop, iterate through the letterIndexes indexes of the word at the current wordIndexes of the wordsArray array;
 * 6. concatenate the value of the reverseString string with that of the letter at the current letterIndex of the word at the current wordIndex of the wordsArray, and:
 * 7. assign the result of that expression back to the reverseString variable;
 * 8. after that for loop, concatenate the value of the reverseString string with an empty space, then assign the result of that expression back to the reverseString variable;
 * 9. after all for loops, return from the function the value of the reverseString string trimmed at the end.
 */

function reverseWords(string) {
  var wordsArray = string.split(' ');
  var reverseString = '';
  for (var wordIndex = 0; wordIndex < wordsArray.length; wordIndex++) {
    for (var letterIndex = wordsArray[wordIndex].length - 1; letterIndex >= 0; letterIndex--) {
      reverseString += wordsArray[wordIndex][letterIndex];
    }
    reverseString += ' ';
  }
  return reverseString.trimEnd();
}
