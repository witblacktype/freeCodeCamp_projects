/* Bonfire: Smallest Common Multiple */

function smallestCommons(arr) {
  var start;
  var stop;
  function leastCommon(a, b){
    var lcm = b * (b - 1);
    console.log("starting lcm = " + lcm);
    b -= 2;
    while (b >= a){
      console.log("b >= a");
      if ( lcm % b === 0){
        console.log(lcm);
      }else{
        lcm *= b;
        console.log(lcm);
      }
      b--;
    }
    return lcm;
  }
  if( arr[0] < 0 || arr[1] < 0){
    return "Negative numbers are not conventional inputs for finding a Least Common Mulitple and are therefore invalid.";
  }else if( arr[0] === arr[1]){
    return "Two unique numbers must be supplied in the function call to produce a nontrivial solution for the Least Common Multiple.";
  }else if(arr[0] < arr[1] ){
    start = arr[0];
    stop = arr[1];
    return leastCommon(start, stop);
  }else if(arr[0] > arr[1]){
    start = arr[1];
    stop = arr[0];
    return leastCommon(start, stop);
  }
}
smallestCommons([1,5]);     // Expected value = 60
//smallestCommons([1,13]);  // Expected value = 360360
