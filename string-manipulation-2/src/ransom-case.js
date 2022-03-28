/* exported ransomCase */
function ransomCase(string) {
  var stringArray = string.split('');
  var ransomString = '';
  for (var i = 0; i < stringArray.length; i++) {
    if (i % 2 === 1) {
      ransomString += stringArray[i].toUpperCase();
    } else {
      ransomString += stringArray[i].toLowerCase();
    }
  }
  return ransomString;
}
