function map(array, transform) {
  const result = [];
  for (const element of array) {
    result.push(transform(element));
  }
  return result;
}

// test the map() method
console.log(map([1, 2, 3, 4, 5, 6], number => number * 2));
