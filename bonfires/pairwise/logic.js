/* Bonfire: Pairwise */

function pairwise(arr, arg) {
  var indexArr = [];
  var z = -1;
	function pair(total, num){
		z++;
		for (var i = 0; i < arr.length; i++){
			if (num + arr[i] === arg && z != i && indexArr.indexOf(i) === -1 && indexArr.indexOf(z) === -1){
				indexArr.push(z);
				indexArr.push(i);
				return total + z + i;
			}
		}
		return total;
	}
	var sum = arr.reduce(pair, 0);
  return sum;
}



// pairwise([1, 4, 2, 3, 0, 5], 7)			// expect 11
// pairwise([1, 3, 2, 4], 4);						// expect 1
// pairwise([1,1,1], 2)									// expect 1
// pairwise([0, 0, 0, 0, 1, 1], 1)			// expect 10
 pairwise([0, 1, 4, 5, 2, 1, 0, 1, 1], 2)			// expect 25
// pairwise([], 100)										// expect 0























/*
function pairwise(arr, total) {
// For each item in the array
var sums = arr.reduce(function (indexSum, firstNumber, firstIndex) {
    // Collect the pair's index which causes the numbers to sum to total
    var secondIndices = arr.slice(firstIndex + 1).reduce(function (secondIndices, secondNumber, i) {
        if (firstNumber + secondNumber === total) secondIndices.push(firstIndex + i + 1);
        return secondIndices;
    }, []);
    console.log(secondIndices);
    // Add to our collection the sum this iteration's index and
    // the pair indices
    return indexSum.concat(secondIndices.map(function (secondIndex) {
        return secondIndex + firstIndex
    }));
}, []);
// In all the items, find the smallest sum
return Math.min.apply(null, sums);
}

console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
console.log(pairwise([1, 3, 2, 4], 4));
*/











