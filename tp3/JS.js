let infoa;
fetch("https://rickandmortyapi.com/api/character/")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        infoa = data.info.count;
    })

function getCharacter() {
    let id = document.getElementById("CharBox").value
    id = parseInt(id)
    console.log(parseInt(id))
    if (id >= 1 && id <= infoa.info.count) {
        data = infoa.results[id-1]
        document.getElementById("name").innerText = data.name;
        document.getElementById("status").innerText = data.status;
        document.getElementById("specie").innerText = data.species;
        document.getElementById("city").innerText = data.location.name;
        document.getElementById("foto").innerHTML = ` <img src="` + data.image + `">`;

    } else {
        document.getElementById("name").innerText = "Error: Personaje invalido";
        document.getElementById("status").innerText = "";
        document.getElementById("specie").innerText = "";
        document.getElementById("city").innerText = "";
        document.getElementById("foto").innerHTML = "";
    }
}
