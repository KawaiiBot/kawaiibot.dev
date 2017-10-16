var requestURL = "https://rawgit.com/KawaiiDevs/Website/master/partners/list.json"

fetch(requestURL)
  .then(res => res.json())
  .then(json => {
    var thedata = document.getElementById("partners");

    json.forEach(entry => {
      thedata.appendChild(document.createRange().createContextualFragment(`
        <div class="flex-item">
          <div class="items">
            <img src="${entry.logo}">
            <h2>${entry.name}</h2>
            <p>${entry.desc}</p>
            <div class="list">
            ${entry.links.map(link => `<a href="${link.url}" target="_blank">${link.name}</a>`).join("\n")}
            </div>
          </div>
        </div>
      `))
    })
  })
