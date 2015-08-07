/* Bonfire: Pig Latin */

function translate(str) {
	vowels = ['a', 'e', 'i', 'o', 'u'];
	if (vowels.indexOf(str.charAt(0)) === -1){
		var i = 1;
		while (vowels.indexOf(str.charAt(i)) === -1){
			i++;
		}
		str = str.substr(i, str.length) + str.substr(0, i) + "ay";
	}else{
		str = str.concat("way");
	}
	console.log(str);
	return str;
}
translate("consonant");