/* Bonfire: Mutations */

function mutation(arr) {
	var match = false;
	for (var i = 0; i < arr[1].length; i++){
		match = false;
		console.log(arr[1].charAt(i));
		for(var j = 0; j < arr[0].length; j++){	
			console.log(arr[0].charAt(j).toLowerCase());
			if(arr[1].charAt(i).toLowerCase() == arr[0].charAt(j).toLowerCase()){
				match = true;
				break;
			}
		}	
	}
	return match;
}
mutation(['hello', 'Hey']);