/* exported isAnagram */

/** pseudocode for isAnagram
 * for this algorithm, the idea is to first get rid of every space in the string paramethers,
 * to get all letters to lower case, and to split each character inside an array;
 * then have a paired array of boolean values to be set true if a character match;
 * if a character has matched, it can't match again. Once we cycle through every character,
 * we either gonna have two arrays of boolean trues, or a mismatche will show itself as false value within;
 * now, to the pseudocode:
 * 1. make the function definition isAnagram() with two paramethers: firstString and secondString;
 * 2. declare a variable firstArray, and assign to it the array of strings split from the firstString paramether by the empty spaces;
 * 3. declare a variable temporaryString and assign an empty string to it;
 * 4. Using a for loop
 */

function isAnagram(firstString, secondString) {
  var firstArray = firstString.split(' ');
  var temporaryString = '';
  for (var i = 0; i < firstArray.length; i++) {
    temporaryString += firstArray[i];
  }
  temporaryString = temporaryString.toLowerCase();
  firstArray = temporaryString.split('');
  // console.log(firstArray);

  var secondArray = secondString.split(' ');
  temporaryString = '';
  for (i = 0; i < secondArray.length; i++) {
    temporaryString += secondArray[i];
  }
  temporaryString = temporaryString.toLowerCase();
  secondArray = temporaryString.split('');
  // console.log(secondArray);

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
  // console.log(firstMatch);
  // console.log(secondMatch);
  return !firstMatch.includes(false);
}
