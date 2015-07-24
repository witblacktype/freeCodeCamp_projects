/* Bonfire: Slasher Flick */

function slasher(arr, howMany) {
	arr = arr.splice(howMany, arr.length - howMany);
  return arr;
}
slasher([1, 2, 3], 9);