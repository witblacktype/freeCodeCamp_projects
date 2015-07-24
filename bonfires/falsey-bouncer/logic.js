/* Bonfire: falsey bouncer */

function bouncer(arr) {
	function falsey(A){
		if (A == false || A == null) {
			return false;
		}
		else{
			return true;	
		}
	}
  arr = arr.filter(falsey);
  return arr;
}
bouncer([7, 'ate', '', false, 9]);