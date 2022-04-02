/* exported isPalindromic */

function isPalindromic(string) {
  var wordsArray = string.split(' ');
  var wordsString = '';
  for (var i = 0; i < wordsArray.length; i++) {
    wordsString += wordsArray[i];
  }
  wordsString = wordsString.toLocaleLowerCase();
  var palindrome = true;
  for (var j = 0; j < wordsString.length / 2; j++) {
    if (string.at(j) !== wordsString.at(wordsString.length - 1 - j)) {
      palindrome = false;
    }
  }
  return palindrome;
}
