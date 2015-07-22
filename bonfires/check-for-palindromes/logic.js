/* Bonfire: Check for Palindromes */

function palindrome(str) {
	function reverse(match){
		console.log(match.split('').reverse().join('') + " 3.5");
		return match.split('').reverse().join('');
	}
  str = str.toLowerCase();
  str = str.replace(/[\s\W]/g, '');
	var re = str.replace(/[a-zA-z]+/i, reverse);
  if (re == str){
  	return true;
  }
  else{
  	return false;
  }
}
palindrome("Not a palindrome");