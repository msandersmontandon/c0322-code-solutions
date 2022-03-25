/* exported filterOutStrings */
function filterOutStrings(values) {
  var nonStringValues = [];
  for (var i = 0; i < values.length; i++) {
    if ((typeof values[i]) !== (typeof 'string')) {
      nonStringValues.push(values[i]);
    }
  }
  return nonStringValues;
}
