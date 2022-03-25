/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) < 65 || word.charCodeAt(i) > 90) {
      return false;
    }
  }
  return true;
}
