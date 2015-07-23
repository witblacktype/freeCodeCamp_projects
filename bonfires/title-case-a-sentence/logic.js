/* Bonfires: Title Case a Sentence */

function titleCase(str) {
  function cap(match){
		match = match.toUpperCase();
		return match;
	}
	str = str.toLowerCase().replace(/(?:[^a-z\']|^)([a-z])(?=[a-z]{0})/g, cap);
  return str;
}
titleCase("I'm a little tea pot");