/* Bonfire: Mutations */

function mutation(arr) {
	
	for (var i = 0; i < arr[1].length; i++){
		console.log(arr[1].charAt(i));

		for(var j = 0; j < arr[0].length; j++){
			if(arr[1].charAt(i) === arr[0].charAt(j)){
				console.log("a match");
				console.log(j);
				j = arr[0].length;
				console.log(j);
			}
			else{
				console.log(false);
				return false;
				break;
			}
		}		
	}
	console.log(true);
  return true;
}

mutation(['hello', 'hey']);