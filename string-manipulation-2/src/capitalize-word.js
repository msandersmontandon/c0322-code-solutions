/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  var firstLetter = word.at(0);
  var rest = word.slice(1);
  return firstLetter.toUpperCase() + rest.toLowerCase();
}
