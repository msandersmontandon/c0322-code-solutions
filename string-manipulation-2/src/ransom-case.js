/* exported ransomCase */

/** pseudocode for ransomCase
 * 1. make the function definition for ransomCase() with 1 argument: string;
 * 2. declare the variable stringArray and assign to it an array of all the characters splitted from the string array;
 * 3. declare  the variable ransomString and assign an empty string to it;
 * 4. using a for loop, iterate through all the indexes of the stringArray array;
 * 5. using an if statement, check if the current index is odd;
 * 6. if it is, concatenate the value of ransomString to the string at the current index of the stringArray array taken to upper case, then:
 * 7. assing the result of that expression to the ransomString variable;
 * 8. else, concatenate the value of ransomString to the string at the current index of the stringArray array taken to lower case, then:
 * 9. assign the result of that expression to the ransomString variable;
 * 10. after the end of the for loop, return from the function the value of the ransomString variable.
 */

function ransomCase(string) {
  var stringArray = string.split('');
  var ransomString = '';
  for (var i = 0; i < stringArray.length; i++) {
    if (i % 2 === 1) {
      ransomString += stringArray[i].toUpperCase();
    } else {
      ransomString += stringArray[i].toLowerCase();
    }
  }
  return ransomString;
}
