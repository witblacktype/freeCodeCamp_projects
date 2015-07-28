/* Bonfire: Sum All Numbers in a Range */ 

function sumAll(arr){
var sum = 0;
	function sumOver(previousValue, currentValue, index, array) {
  	return previousValue + currentValue;
	}
	for (var i = Math.min(arr[0],arr[1]) + 1; i < Math.max(arr[0],arr[1]); i++){
		arr.push(i);
	}
	return arr.reduce(sumOver);
}
sumAll([1, 4]);

/*
function sumAll(arr) {
	var sum;
  if( arr[1] > arr[0]){
  	for (var i = 0; i < arr[1]; i++){
  		sum += i;
  	}
  	return sum;
  }
  else if( arr[0] > arr[1]){
  	for (var j = 0; j < arr[0]; j++){
  		sum += j;
  	}
  	return sum;
  }
  else{
  	return arr[0];
  }
}
sumAll([1, 4]);
*/