/* exported numVowels */
function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    switch (string.at(i)) {
      case 'a':
      case 'A':
      case 'e':
      case 'E':
      case 'i':
      case 'I':
      case 'o':
      case 'O':
      case 'u':
      case 'U':
        count++;
    }
  }
  return count;
}
