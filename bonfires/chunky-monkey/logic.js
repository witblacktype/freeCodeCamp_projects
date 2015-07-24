/* Bonfire: Chunky Monkey */

function chunk(arr, size) {
  var multi = [];
  var inner = [];
  var count = 0;
  for (var i = 0; i < arr.length; i++){
  	if ( count < size){
  		inner.push(arr[i]);
  		count++;
  		if (inner.length == size){
  			multi.push(inner);
  			inner = [];
  			count = 0;
      }
      else if( i + 1 == arr.length){
				multi.push(inner);
  			inner = [];
        count = 0;
			}	
  	}
  }
  return multi;
}
chunk([0, 1, 2, 3, 4, 5], 4);