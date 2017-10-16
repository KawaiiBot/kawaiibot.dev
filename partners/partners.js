var requestURL = "https://rawgit.com/KawaiiDevs/Website/master/partners/list.json"

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


function getPartners(json) {
  var thedata = document.getElementById("partners");
  for (var i = 0; i < json.length; i++) {
    console.log(json[i].name)
    var splitter = document.createElement("div");
    splitter.className = "flex-item"
    var name = document.createElement("h2");
    var logo = document.createElement("img");
    var desc = document.createElement("p");
    var links = document.createElement("div");
    links.className = "list";

    var allLinks = json[i].links;
    for (var j = 0; j < allLinks.length; j++) {
      var listItem = document.createElement('a');
      listItem.href = allLinks[j].url;
      listItem.textContent = allLinks[j].name;
      links.appendChild(listItem);
    }

    name.textContent = json[i].name;
    desc.textContent = json[i].desc;
    logo.src = json[i].logo;

    // Each information to partners
    splitter.appendChild(logo);
    splitter.appendChild(name);
    splitter.appendChild(desc);
    splitter.appendChild(links);

    // Load partners
    thedata.appendChild(splitter);
  }
}

request.onload = function() {
  var data = request.response;
  getPartners(data)
}
