/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var swaptString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swaptString += string.at(secondIndex);
    } else if (i === secondIndex) {
      swaptString += string.at(firstIndex);
    } else {
      swaptString += string.at(i);
    }
  }
  return swaptString;
}
