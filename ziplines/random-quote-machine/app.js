function loadXMLDoc(){
  var xhr = new XMLHttpRequest();
  var url = "data.json";
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var myArr = JSON.parse(xhr.responseText);
      var selection = Math.floor(Math.random()*9);
      document.getElementById("change-me").innerHTML = myArr.quotes[selection].quote + "<br><br><em>" + myArr.quotes[selection].author + "</em>";
      //create dynamic tweet button with quote as tweet message
      function createButton() {
        //remove old tweet box
        var tweet = document.getElementById('tweet').innerHTML;
        document.getElementById('tweet').innerHTML = "";
        //set parameters of tweet box
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
