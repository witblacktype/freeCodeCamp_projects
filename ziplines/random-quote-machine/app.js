function loadPage(){
  var xhr = new XMLHttpRequest();
  var url = "data.json";
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var myArr = JSON.parse(xhr.responseText);
      var selection = Math.floor(Math.random()*9);
      document.getElementById("change-me").innerHTML = myArr.quotes[selection].quote + "<br><br><em>" + myArr.quotes[selection].author + "</em>";
      //create dynamic tweet button with quote as tweet message
      function createButton() {
        // Remove Whatever is in the tweeetbox div if theres somethign
        //there to avoid adding multiple tweetbuttons
        var elem = document.getElementById('tweet').childNode;
        console.log(typeof elem);
        if (elem != null) {
            elem.parentNode.removeChild(elem);
            console.log("child removed");
        }
        // Create a New Tweet Element
        var msg  =  myArr.quotes[selection].quote + " - " + myArr.quotes[selection].author;
        var link = document.createElement('a');
        link.setAttribute('href', 'https://twitter.com/share');
        link.setAttribute('class', 'twitter-share-button ');
        link.setAttribute("id", "twitterbutton");
        link.setAttribute("data-text", "" + msg + "");
        link.setAttribute("data-via", "witblacktype");
       // Put it inside the twtbox div
        var tweetdiv  =  document.getElementById('tweet');
        tweetdiv.appendChild(link);
        twttr.widgets.load(); //very important
      }
      createButton();
    }
  }
  xhr.open("GET", url, true)
  xhr.send();
}

function loadXMLDoc(){
  var xhr = new XMLHttpRequest();
  var url = "data.json";
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var myArr = JSON.parse(xhr.responseText);
      var selection = Math.floor(Math.random()*9);
      document.getElementById("change-me").innerHTML = myArr.quotes[selection].quote + "<br><br><em>" + myArr.quotes[selection].author + "</em>";
      //create dynamic tweet button with quote as tweet message

    }
  }
  xhr.open("GET", url, true)
  xhr.send();
}
