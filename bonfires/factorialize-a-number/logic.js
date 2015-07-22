/* Bonfire: Factorialize a Number */

function factorialize(num) {
  var F = 1;
  for(var i = 2; i <= num; i++){
  	F *= i;
  }
  return F;
}

console.log(factorialize(5));