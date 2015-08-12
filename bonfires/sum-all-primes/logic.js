/* Bonfire: Sum All Primes */

function sumPrimes(num) {
  var sum = 0;
  for (var i = 2; i <= num; i++){
    sum += i;
    for (var j = 2; j <= Math.sqrt(i); j++){
      if( i % j === 0){
        sum -= i;
        break;
      }
    }
  }
  return sum;
}
sumPrimes(10);
