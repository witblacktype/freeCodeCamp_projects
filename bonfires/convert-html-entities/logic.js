/* Bonfire: Convert HTML Entities */

function convert(str) {
  function swap(match){
  	switch(match){
  		case "&":
  			return "&amp;";
  		case "<":
  			return "&lt;";
  		case ">":
  			return "&gt;";
  		case "\"":
  			return "&quot;";
  		case "'":
  			return "&apos;";
  	}
  }
  str = str.replace(/[&<>"']/gi, swap);
  return str;
}
convert('Dolce & Gabbana<>');