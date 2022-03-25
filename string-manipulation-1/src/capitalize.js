/* exported capitalize */
function capitalize(word) {
  var upperCase = word.at(0);
  upperCase = upperCase.toUpperCase();
  var lowerCase = word.slice(1, word.length);
  lowerCase = lowerCase.toLowerCase();
  return upperCase + lowerCase;
}
