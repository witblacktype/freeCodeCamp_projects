/* Bonfire: Where do I belong */

function where(arr, num) {
for (var i = 0; i < arr.length; i++){
	if (num <= arr[i]){
		num = i;
		break;
	}
}
return num;
}
where([40, 60], 50);