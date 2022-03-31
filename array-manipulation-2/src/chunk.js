/* exported chunk */

/** pseudocode for chunk
 * 1. make the function definition of chunk() with 2 arguments: array and size;
 * 2. delcare a variable chunkArray and assign to it an empty array;
 * 3. declare a variable count and assign the number 0 to it;
 * 4. use a for loop to iterate (length of the array paramether over the size paramether) times (i indexes);
 * 5. append an empty array to the end of the chunkArray array;
 * 6. use a for loop to iterate (size paramether) times (j indexes), unless the count reaches the length of the array paramether;
 * 7. append to the end of an array at the i index of the chunkArray array the value at the count index;
 * 8. increment the count variable by 1;
 * 6. after both of the for loops, return the value of the chunkArray variable;
 */

function chunk(array, size) {
  var chunkArray = [];
  var count = 0;
  for (var i = 0; i < (array.length / size); i++) {
    chunkArray.push([]);
    for (var j = 0; j < size && count < array.length; j++) {
      chunkArray[i].push(array[count]);
      count++;
    }
  }
  return chunkArray;
}
