function loadXMLDoc(){
  var xhr = new XMLHttpRequest();
  var url = "data.json";
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
      var arr = JSON.parse(xhr.responseText);
      var select = Math.floor(Math.random()*9);
      document.getElementById("change-me").innerHTML = arr.quotes[select].quote + "<br><br><em>" + arr.quotes[select].author + "</em>";
      function customTweet(){
        function tweetParse(){
          var str = arr.quotes[select].quote + "%20-%20" + arr.quotes[select].author;
          return str.replace(/\s/g, '%20');
        }
        var parsed = tweetParse();
        var dest = "https://twitter.com/intent/tweet?text=" + parsed + "&via=witblacktype";
        var link = document.getElementById('tweet');
        link.setAttribute('href', dest);
      }
      customTweet();
    }
  }
  xhr.open("GET", url, true)
  xhr.send();
}
