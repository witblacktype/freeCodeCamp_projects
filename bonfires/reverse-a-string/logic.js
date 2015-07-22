/* Bonfire: Reverse a String */

function reverseString(str) {

/* Solution 1 */
	str = str.split('').reverse().join('');
	console.log(str);
  return str;

/* Solution 2 */
/*
	var storage = [];
	for(var i = str.length; i > 0; i--){
		storage[i] = str.charAt(str.length - i);
	}
	str = storage.join(" ");
	var output = new String();
	for(var i = 0; i < str.length; i++){
		var space = " ";
		if(str.charAt(i) != space){
			output = output.concat(str.charAt(i));
		}
	}
	return output;
*/
}
reverseString("hello");