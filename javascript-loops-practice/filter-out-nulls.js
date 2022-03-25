/* exported filterOutNulls */
function filterOutNulls(values) {
  var nonNullValues = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      nonNullValues.push(values[i]);
    }
  }
  return nonNullValues;
}
