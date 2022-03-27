/* exported isUpperCased */
function isUpperCased(word) {
  if (word.toUpperCase() !== word) {
    return false;
  }
  return true;
}
