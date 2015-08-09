/* Bonfire: Boo-who */

function boo(bool) {
	if (typeof bool === typeof true){
		return true;
	}else{
		return false;
	}
}
boo({ 'a': 1 });