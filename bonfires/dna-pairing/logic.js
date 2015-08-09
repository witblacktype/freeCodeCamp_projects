/* Bonfire: DNA Pairing */

function pair(str) {
	var arr = str.split('');
	for (var i = 0; i < str.length; i++){
		switch (arr[i]){
			case 'A':
				arr[i] = ['A', 'T'];
				break;
			case 'T':
				arr[i] = ['T', 'A'];
				break;
			case 'C':
				arr[i] = ['C', 'G'];
				break;
			case 'G':
				arr[i] = ['G', 'C'];
				break;
		}
	}
	return str;
}
pair("GCG");