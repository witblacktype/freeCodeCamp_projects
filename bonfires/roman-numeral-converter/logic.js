/* Bonfire: Roman Numeral Converter */

function convert(num) {

	var arr = [];
	var inner = []; 
	var huns = Math.floor(num/100)%10;
	var tens = Math.floor(num/10)%10;
	var ones = num%10;
	console.log(huns);
	console.log(tens);
	console.log(ones);	
	
	/* Roman Numerals
	M = 1000;
	D = 500;
	C = 100;
	L = 50;
	X = 10;
	V = 5;
	I = 1;
	*/
	
	console.log(huns);
	
	if (huns < 4){
		inner = Array(huns + 1).join("C");
	}
	if (huns === 4){
		inner = "CD";
	}
	if (huns > 4 && huns < 9){
		inner = "D" + Array(huns - 4).join("C");
	}
	if (huns === 9){
		inner = "CM";
	}
	arr.push(inner);

	if (tens < 4){
		inner = Array(tens + 1).join("X");
	}
	if (tens === 4){
		inner = "XL";
	}
	if (tens > 4 && tens < 9){
		inner = "L" + Array(tens - 4).join("X");
	}
	if (tens === 9){
		inner = "XC";
	}
	arr.push(inner);

	if (ones < 4){
		inner = Array(ones + 1).join("I");
	}
	if (ones === 4){
		inner = "IV";
	}
	if (ones > 4 && ones < 9){
		inner = "V" + Array(ones - 4).join("I");
	}
	if (ones === 9){
		inner = "IX";
	}
	arr.push(inner);

	var roman = arr.join('');

	console.log(roman);
	return roman;

}

convert(237);
