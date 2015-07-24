/* Bonfire: Check for Palindromes */

function palindrome(str) {
	function reverse(match){
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