function loadXMLDoc(){
  var xhr = new XMLHttpRequest();
  var x;
  var forecast =  "https://api.forecast.io/forecast";
  var key = "91e1b62408dc2bb3f72912c598024a11";
  var lat = "37.787049599999996";
  var long = "-122.2333479999999";
  var url = forecast + "/" + key + "/" + lat + "," + long;
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      var x = responseText;
      console.log(x);
      document.getElementById("demo").innerHTML = "hello";
    }
  }
  xhr.open("GET", url, true)
  xhr.send();
}
