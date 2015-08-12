/* Bonfire: Sum All Odd Fibonacci Numbers */

function sumFibs(num) {
	var oddFibs = function(n){
		var sum = 0;
		var a = 0, b = 1, f = 1;
		console.log("F(1) = " + f);
		for (var i = 2; f <= n; i++){
			if(f%2 === 1){
				sum += f;
			}
			f = a + b;
			a = b;
			b = f;
			console.log("F(" +  i + ") = " + f);
		}
		console.log("final value for f = " + f);
		console.log("sum = " + sum);
		return sum;
	}
  return oddFibs(num);
}
console.log(sumFibs(4));
sumFibs(4);
