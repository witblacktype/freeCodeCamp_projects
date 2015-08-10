/* Bonfire: Spinal Tap Case */

function spinalCase(str) {
	function lowercase(match){
		return match.toLowerCase();
	}
	str = str.replace(/[ _]/gi, "-");
	str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
	str = str.replace(/[A-Z]/g, lowercase);
  return str;
}
spinalCase('thisIsSpinalTap');