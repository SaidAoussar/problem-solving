function sumArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  let max = array[0];
  let min = array[0];
  let sum = 0;

  // find the max and min element
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }

  // delete the max and min from array
  array.splice(array.indexOf(max), 1);
  array.splice(array.indexOf(min), 1);

  // sum all numbers of the array
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return sum;
}

sumArray([0, 1, 6, 10, 10]);
