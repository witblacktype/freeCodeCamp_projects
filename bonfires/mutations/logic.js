/* Bonfire: Mutations */

function mutation(arr) {
	var match = false;
	for (var i = 0; i < arr[1].length; i++){
		match = false;
		for(var j = 0; j < arr[0].length; j++){	
			if(arr[1].charAt(i).toLowerCase() == arr[0].charAt(j).toLowerCase()){
				match = true;
				break;
			}
		}	
	}
	return match;
}
mutation(['hello', 'Hey']);