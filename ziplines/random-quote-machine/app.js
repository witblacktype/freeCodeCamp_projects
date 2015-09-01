
  //load twitter js
  createButton();
  function createButton() {

      // Create a New Tweet Element
      var msg  =  document.getElementById("change-me").innerHTML;
      var link = document.createElement('a');
      link.setAttribute('href', 'https://twitter.com/share');
      link.setAttribute('class', 'twitter-share-button');
      link.setAttribute('id', 'twitterbutton');
      link.setAttribute("data-text",  "" + msg + "");
      link.setAttribute("data-via", "denvycom");
      link.setAttribute("data-size", "large");

     // Put it inside the twtbox div
      tweetdiv  =  document.getElementById('twtbox');
      tweetdiv.appendChild(link);

      twttr.widgets.load(); //very important
  }
  createButton();

function loadXMLDoc(){
  var xhr = new XMLHttpRequest();
  var url = "data.json";
  console.log("loadXMLDoc");
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
