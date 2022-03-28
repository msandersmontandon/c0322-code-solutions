/* exported capitalizeWords */
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
