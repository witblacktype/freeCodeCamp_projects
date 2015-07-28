/* Bonfire: Seek and Destroy */

function destroyer(arr) { 
	var master = arr;
	var check = [];
	function destroy(num){
		if (num == check[i]) {
			return false;
		}else{
			return true;
		}
	}
	for (var i = 1; i < arguments.length; i++){	
		check.push(arguments[i]);	
	}
  for (i = 0; i < check.length; i++){	
	  master = master.filter(destroy);
  }
  return master;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);




/*
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1);

  return arr.filter(function(elem, index, arr) {
    for (i = 0; i < args.length; i++) {
      if (elem === args[i]) {
        return false;
      }
    }
    return true;
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
*/