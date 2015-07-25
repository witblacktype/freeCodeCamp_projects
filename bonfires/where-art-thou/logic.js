/* Bonfire: Where art thou */

function where(collection, source) {
  var arr = [];
  for (var name in source){
  	for (var prop in collection){
  		if (collection[prop][name] === source[name]){
  			arr.push(collection[prop]);	
  		}
  	}
  }
  return arr;
}
where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });