function bubblesort(array) {
  let swapped = false;
  for (var i = 0; i < array.length; i++) {
    if(array[i] > array[i + 1]) {
      var temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
      swapped = true;
    }
  }
  if(swapped) {
    bubblesort(array);
  }
  return array;
};

module.exports = bubblesort
