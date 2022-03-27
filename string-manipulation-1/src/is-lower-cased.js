/* exported isLowerCased */
function isLowerCased(word) {
  if (word.toLowerCase() !== word) {
    return false;
  }
  return true;
}
