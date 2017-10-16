var requestURL = "https://rawgit.com/KawaiiDevs/Website/master/partners/list.json"

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var data = request.response;
}
