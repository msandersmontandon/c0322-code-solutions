/* exported isPalindromic */

/** pseudocode for isPalindromic
 * 1. make the function definition for isPalindromic() with 1 paramether: string;
 * 2. declare the variable wordsArray and assign to it an array of strings split from the string paramether at the empty spaces;
 * 3. declare the variable wordsString and assing an empty array to it;
 * 4. use a for loop to iterate through the indexes of the wordsArray array;
 * 5. concataneta the wordsString array with the array at the current index of the wordsArray array, then:
 * 6. assign the result of that expression to the wordsString variable;
 * 7. after the end of that for loop, take the wordsString string to the lower case and assign it to the wordsString variable;
 * 8. declare the variable palindrome and assign the boolean value of true to it;
 * 9. use a for loop to iterate through half of the characters of the wordsString string, statrting at the first one;
 * 10. use an guarded if statement to see if the character at the current index of the wordsString string is different from the character at the simetrical opposit end of the same string;
 * 11. If any of them are, assign the boolean value of false to the palindrome variable;
 * 12. after the end of that if statement, and after the end of that for loop, return from the function the value of the palindrome variable;
 */

function isPalindromic(string) {
  var wordsArray = string.split(' ');
  var wordsString = '';
  for (var i = 0; i < wordsArray.length; i++) {
    wordsString += wordsArray[i];
  }
  wordsString = wordsString.toLowerCase();
  var palindrome = true;
  for (var j = 0; j < wordsString.length / 2; j++) {
    if (string.at(j) !== wordsString.at(wordsString.length - 1 - j)) {
      palindrome = false;
    }
  }
  return palindrome;
}
