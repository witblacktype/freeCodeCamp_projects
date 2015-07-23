/* Bonfire: Truncate a string */

function truncate(str, num) {
  if ( str.length > num){
  	str = str.substr(0, num - 3).concat("...");	
  }
  console.log(str);
  return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);