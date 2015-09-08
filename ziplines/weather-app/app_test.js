
/*
function loadXMLDoc(){
  var xhr = new XMLHttpRequest();
  var forecast = "https://api.forecast.io/forecast";
  var api = "91e1b62408dc2bb3f72912c598024a11";
  var url;
  xhr.onreadystatechange = function(){
    console.log("first log");

    if (xhr.readyState === 4 && xhr.status === 200){
      function getLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
          } else {
              x.innerHTML = "Geolocation is not supported by this browser.";
          }
      }
      function showPosition(position) {
          url = forecast + "/" + api + "/" + position.coords.latitude + "," + position.coords.longitude;
      }
    }
  }
  console.log(url);
  console.log("last output");
  xhr.open("GET", url, true);
  xhr.send();

}
*/

function loadXMLDoc(){
  /* primary variables */
  var forecast = "https://forecast.io/forecast";
  var key = "91e1b62408dc2bb3f72912c598024a11";
  var lat;
  var long;
  var url = "";

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
      var arr = xhr.responseText;
      console.log(arr);
      /* html5 geolocation */
      function showPosition(position) {
          lat = position.coords.latitude;
          long = position.coords.longitude;
          url = forecast + "/" + key + "/" + lat + "," + long;
      }
      function getLocation() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
          } else {
              console.log("Geolocation is not supported by this browser.");
          }
      }
      getLocation();



    }
  }
  console.log("last");
  xhr.open("GET", url, true);
  xhr.send();

}
