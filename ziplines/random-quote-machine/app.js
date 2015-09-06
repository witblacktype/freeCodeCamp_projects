function loadXMLDoc(){
  var xhr = new XMLHttpRequest();
  var url = "data.json";
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      //get a semi-random quote from the json and display it
      var myArr = JSON.parse(xhr.responseText);
      var selection = Math.floor(Math.random()*9);
      document.getElementById("change-me").innerHTML = myArr.quotes[selection].quote + "<br><br><em>" + myArr.quotes[selection].author + "</em>";
      //update twitter button
      function customTweet(){
        //parse reposnseText to Twitter format
        function tweetParse(){
          var str = myArr.quotes[selection].quote + "%20-%20" + myArr.quotes[selection].author;
          return str.replace(/\s/g, '%20');
        }
        //set the href attribute for the Twitter <a> tag
        var link = document.getElementById('tweet-link');
        var str = tweetParse();
        var dest = "https://twitter.com/intent/tweet?text=" + str + "&via=witblacktype";
        link.setAttribute('href', dest)
        //append the href attribute to the Twitter <a> tag
        var tweetdiv  =  document.getElementById('tweet');
        tweetdiv.appendChild(link);
      }
      customTweet();
    }
  }
  xhr.open("GET", url, true)
  xhr.send();
}
