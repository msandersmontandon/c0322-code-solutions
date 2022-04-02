/* exported isAnagram */

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
