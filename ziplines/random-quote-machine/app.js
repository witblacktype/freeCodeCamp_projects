
//load twitter js
function loadPage(){
  var xhr = new XMLHttpRequest();
  var url = "data.json";
  console.log("the page has loaded");
  console.log(xhr.status);
  xhr.onload = function(){
    console.log("xhr onload function");
    var myArr = JSON.parse(xhr.responseText);
    var selection = Math.floor(Math.random()*8);
    document.getElementById("change-me").innerHTML = myArr.quotes[selection].quote + "<br><br><em>" + myArr.quotes[selection].author + "</em>";
  }
  xhr.open("GET", url, true)
  xhr.send();
}

/*
window.onload = function(){
  if (xhr.status >= 200 && xhr.status < 400){
    var myArr = JSON.parse(xhr.responseText);
    var selection = Math.floor(Math.random()*8);
    document.getElementById("change-me").innerHTML = myArr.quotes[selection].quote + "<br><br><em>" + myArr.quotes[selection].author + "</em>";
  }else{
    console.log("server error");
  }
};
*/

function loadXMLDoc(){
  var xhr = new XMLHttpRequest();
  var url = "data.json";
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var myArr = JSON.parse(xhr.responseText);
      var selection = Math.floor(Math.random()*9);
      document.getElementById("change-me").innerHTML = myArr.quotes[selection].quote + "<br><br><em>" + myArr.quotes[selection].author + "</em>";
    }
  }
  xhr.open("GET", url, true)
  xhr.send();
}
