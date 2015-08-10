/* Bonfire: Sorted Union */

function unite(arr1, arr2, arr3) {
  var uniqueArr = [];
  function solo(arr){
  	for(var i = 0; i < arr.length; i++){
	  	if (uniqueArr.indexOf(arr[i]) === -1){
	  		uniqueArr.push(arr[i]);
	  	}
  	}
  }
  solo(arr1);
  solo(arr2);
  solo(arr3);
  return uniqueArr;
}
unite([1, 3, 2], [5, 2, 1, 4], [2, 1]); // expect [ 1, 3, 2, 5, 4 ]