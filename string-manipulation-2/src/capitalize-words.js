/* exported capitalizeWords */

/** pseudocode for capitalizeWords
 * 1. make the function definition for capitalizeWords() with 1 paramether: string;
 * 2. declare the variable lowerString and assign the string value taken to lower case if the string paramether to it;
 * 3. declare the variable stringArray and assign the array of values split from the lowerString string at the empty spaces to it;
 * 4. declare the variable currentWord and assing the value at the first index of the stringArray array to it;
 * 5. declare the variable capitalLetter and assing the first letter of the currentWord string to it;
 * 6. delcare the variable capitalizedString and assing to it the result of:
 * 7. the concatanation of the capitalLetter string taken to upper case with the string sliced from the second index onwards of the currentWord string;
 * 8. use a for loop to iterate through the indexes of the stringArray array, starting at the second one;
 * 9. assing the value at the current index of the stringArray array to the currentWord variable;
 * 10. assing the value of the first letter of the currentWord string to the capitalLetter variable;
 * 11. concatenate the value of the capitalizedString string with an empty space, then:
 * 12. concatenate the result of that expression with the capitalLetter string taken to upper case, then:
 * 13. concatenate the result of that expression with the string sliced from the second index onwards of the currentWord string, and then:
 * 14. assign the result of that expression to the capitalizedString variable;
 * 15. after the end of the for loop, return from the function the value of the capitalizedString variable.
 */

function capitalizeWords(string) {
  var lowerString = string.toLowerCase();
  var stringArray = lowerString.split(' ');
  var currentWord = stringArray[0];
  var capitalLetter = currentWord.at(0);
  var capitalizedString = capitalLetter.toUpperCase() + currentWord.slice(1);
  for (var i = 1; i < stringArray.length; i++) {
    currentWord = stringArray[i];
    capitalLetter = currentWord.at(0);
    capitalizedString += ' ' + capitalLetter.toUpperCase() + currentWord.slice(1);
  }
  return capitalizedString;
}
