/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixedWords = [];
  for (var i = 0; i < words.length; i++) {
    suffixedWords.push(words[i] + suffix);
  }
  return suffixedWords;
}
