function filter(array, predicate) {
  const result = [];
  for (const element of array) {
    if (predicate(element)) {
      result.push(element);
    }
  }
  return result;
}

// Test of the filter function
console.log(filter([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], number => number % 2 === 0));
