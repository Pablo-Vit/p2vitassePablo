let pagAct = 0;
let info;
function getCharacter() {
    let id = document.getElementById("CharBox").value;
    id = parseInt(id);
    pag = parseInt(id / 20) + 1;
    let rId = (id % 20) - 1;
    if (pag == pagAct) {
        console.log('No Fetch');
        let dat = info.results[rId]
        document.getElementById("name").innerText = dat.name;
        document.getElementById("status").innerText = dat.status;
        document.getElementById("specie").innerText = dat.species;
        document.getElementById("city").innerText = dat.location.name;
        document.getElementById("foto").innerHTML = ` <img src="` + dat.image + `">`;
    } else {
        console.log('Fecth');
        fetch("https://rickandmortyapi.com/api/character/?page=" + pag)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                let dat = data.results[rId]
                info = data;
                console.log(dat);
                document.getElementById("name").innerText = dat.name;
                document.getElementById("status").innerText = dat.status;
                document.getElementById("specie").innerText = dat.species;
                document.getElementById("city").innerText = dat.location.name;
                document.getElementById("foto").innerHTML = ` <img src="` + dat.image + `">`;
                pagAct = pag;
            })
            .catch(function (error) {
                document.getElementById("name").innerText = "Error: Personaje invalido";
                document.getElementById("status").innerText = "";
                document.getElementById("specie").innerText = "";
                document.getElementById("city").innerText = "";
                document.getElementById("foto").innerHTML = "";
                console.log(error)
            })
    }

}
