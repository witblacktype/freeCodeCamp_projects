/* Bonfires: Title Case a Sentence */

function titleCase(str) {
newArray = str.split(' ');
  console.log(newArray);
  for(i = 0; i < newArray; i++){
    newArray[i].charAt(0).toUpperCase();
    newArray.join(str);
  }
  console.log(str);
  return str;
}

titleCase("I'm a little tea pot");

/*
function titleCase(str) {
  function cap(match){
		match = match.toUpperCase();
		return match;
	}
	str = str.toLowerCase().replace(/(?:[^a-z\']|^)([a-z])(?=[a-z]{0})/g, cap);
  return str;
}
titleCase("I'm a little tea pot");
*/