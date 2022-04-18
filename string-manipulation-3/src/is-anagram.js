/* exported isAnagram */

/** pseudocode for isAnagram
 * for this algorithm, the idea is to first get rid of every space in the string paramethers,
 * to get all letters to lower case, and to split each character inside an array;
 * then have a paired array of boolean values to be set true if a character match;
 * if a character has matched, it can't match again. Once we cycle through every character,
 * we either gonna have two arrays of boolean trues, or a mismatche will show itself as false value within;
 * now, to the pseudocode:
 * 1. make the function definition isAnagram() with two paramethers: firstString and secondString;
 * 2. declare a variable firstArray and assign to it the array of words split from the firstString paramether by the empty spaces;
 * 3. declare a variable temporaryString and assign an empty string to it;
 * 4. Using a for loop, iterate through the indexes of the firstArray array;
 * 5. concatenate the value of the temporaryString string with the value of the string at the current index of the firstArray array, and then:
 * 6. assign the result of that expression back to the temporaryString variable;
 * 7. take the value of the temporaryString string to lower case and assign it back to the temporaryString variable;
 * 8. assign to the firstArray variable the array of characters split from the temporaryString string;
 * 9. declare a variable secondArray and assign to it the array of words split from the secondString paramether by the empty spaces;
 * 10. assign an empty string to the temporaryString variable;
 * 11. Using a for loop, iterate through the indexes of the secondArray array;
 * 12. concatenate the value of the temporaryString string with the value of the string at the current index of the secondArray array, and then:
 * 13. assign the result of that expression back to the temporaryString variable;
 * 14. take the value of the temporaryString string to lower case and assign it back to the temporaryString variable;
 * 15. assign to the secondArray variable the array of characters split from the temporaryString string;
 * 16. use an if statement to guard against the case in which the lengths of the firstArray array and of the secondArray array don't match;
 * 17. if they don't, return the boolean false from the function;
 * 18. otherwise, declare a variable firstMatch and assign an empty array literal to it;
 * 19. use a for loop to iterate through the firstIndex indexes of the firstArray array;
 * 20. append the boolean value of false to the end of the firstMatch array;
 * 21. after the end of that for loop, declare a variable secondMatch and assign an empty array literal to it;
 * 19. use a for loop to iterate through the secondIndex indexes of the secondArray array;
 * 20. append the boolean value of false to the end of the secondMatch array;
 * 21. use a for loop to iterate through the firstIndex indexes of the firstArray array;
 * 22. use another for loop to iterate through the secondIndex indexes of the secondArray array;
 * 23. if neither the value at the current firstIndex of the firstMatch array nor the value at the current secondIndex of the secondMatch array are true, and:
 * 24. the character at the firstIndex of the firstArray array matches with the character at the current secondIndex of the secondArray array, then:
 * 25. assign the boolean value of true to the current firstIndex of the firstMatch array, and:
 * 26. assign the boolean value of true to the current secondIndex of the secondMatch array;
 * 27. then, after all if statement and for loops, return from the function:
 * 28. the boolean value of false, if there still is any boolean values of false inside the firstMatch array:
 * 29. or the boolean value of true otherwise;
 */

function isAnagram(firstString, secondString) {
  var firstArray = firstString.split(' ');
  var temporaryString = '';
  for (var i = 0; i < firstArray.length; i++) {
    temporaryString += firstArray[i];
  }
  temporaryString = temporaryString.toLowerCase();
  firstArray = temporaryString.split('');

  var secondArray = secondString.split(' ');
  temporaryString = '';
  for (i = 0; i < secondArray.length; i++) {
    temporaryString += secondArray[i];
  }
  temporaryString = temporaryString.toLowerCase();
  secondArray = temporaryString.split('');

  if (firstArray.length !== secondArray.length) {
    return false;
  }

  var firstMatch = [];
  for (var firstIndex = 0; firstIndex < firstArray.length; firstIndex++) {
    firstMatch.push(false);
  }
  var secondMatch = [];
  for (var secondIndex = 0; secondIndex < secondArray.length; secondIndex++) {
    secondMatch.push(false);
  }

  for (firstIndex = 0; firstIndex < firstArray.length; firstIndex++) {
    for (secondIndex = 0; secondIndex < secondArray.length; secondIndex++) {
      if (!firstMatch[firstIndex] && !secondMatch[secondIndex] && (firstArray[firstIndex] === secondArray[secondIndex])) {
        firstMatch[firstIndex] = true;
        secondMatch[secondIndex] = true;
      }
    }
  }
  return !firstMatch.includes(false);
}
