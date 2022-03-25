/* exported oddOrEven */
function oddOrEven(numbers) {
  var numbersSorted = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbersSorted.push('even');
    } else if (numbers[i] % 2 === 1) {
      numbersSorted.push('odd');
    }
  }
  return numbersSorted;
}
