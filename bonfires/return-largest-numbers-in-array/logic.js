

function largestOfFour(arr) {
	var big = [];
  for (var i = 0; i < arr.length; i++){
  	var count = 0;
  	for(var j = 0; j < arr[i].length; j++){
  		if(count < arr[i][j]){
  			count = arr[i][j];
  		}
  	}
  	big.push(count);
  }
  console.log(big);
  return big;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 10008, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);