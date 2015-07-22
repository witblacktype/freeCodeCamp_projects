/* Bonfire: Longest Word */
/* Pair Programmed with Adam Rehard github.com/adamrehard */

function findLongestWord(str) {
  
  var split_str = str.split(' ');
  var word_lengths = [ ];
  for (var i = 0; i < split_str.length; i++) {
    word_lengths.push(split_str[i].length);
  }
  
  var biggest = 0;
  for(var i = 0; i < word_lengths.length; i++){
    if (biggest < word_lengths[i]){
      biggest = word_lengths[i];
    }  
  }
  return(biggest);
}
findLongestWord('The quick brown fox jumped over the lazy dog');