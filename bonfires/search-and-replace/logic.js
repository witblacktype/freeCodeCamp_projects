/* Bonfire: Reverse a String */

function replace(str, before, after) {

	console.log(str.search(before));
	console.log(before.length);
	console.log(str.charAt(str.search(before)));
	console.log(str.charAt(str.search(before)).toUpperCase());





	if (str.search(before) != -1){
		console.log("search and replace!");
		var character = '';
		character = str.charAt(str.search(before));
		console.log(character);
		console.log(character.toUpperCase());
		console.log(character === character.toUpperCase);
		if(character === character.toUpperCase){
			console.log("cap test passed");
			after.charAt(0) = after.charAt(0).toUpperCase;
		}
		str = str.replace(before, after);
	}


	
	console.log(str);
	console.log(after);
	return str;
}
replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");