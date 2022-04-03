/* exported reverseWords */

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
