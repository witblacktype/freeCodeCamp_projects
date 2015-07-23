/* Bonfire: Repeat a String Repeat a String */

function repeat(str, num) {
	if( num < 0){
		str = '';
	}
	else{
		str = str.repeat(num);	
	}
  return str;
}
repeat('abc', 3);