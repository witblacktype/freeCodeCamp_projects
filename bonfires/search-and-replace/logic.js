/* Bonfire: Reverse a String */

function replace(str, before, after) {
	if (str.search(before) != -1){
		var character = '';
		character = str.charAt(str.search(before));
		if(character === character.toUpperCase() && after.charAt(0) === after.charAt(0).toLowerCase()){
			after = after.charAt(0).toUpperCase() + after.substr(1, after.length);
		}
		str = str.replace(before, after);
	}
	return str;
}
replace("He is Sleeping on the couch", "Sleeping", "sitting");