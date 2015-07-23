/* Bonfire: Confirm the Ending */

function end(str, target) {
	str = str.substr(str.length - target.length, str.length);
  if(target === str){
  	return true;
  }
  else{
  	return false;
  }
}
end('Bastian', 'n');