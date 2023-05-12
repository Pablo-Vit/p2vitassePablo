let pagAct = 0;
let info;
function getCharacter(x) {
    let id = document.getElementById("CharBox"+x).value;
    id = parseInt(id);
    pag = parseInt(id / 20) + 1;
    let rId = (id % 20) - 1;
    if (pag == pagAct) {
        console.log('No Fetch');
        let dat = info.results[rId]
        document.getElementById("name"+x).innerText = dat.name;
        document.getElementById("status"+x).innerText = dat.status;
        document.getElementById("specie"+x).innerText = dat.species;
        document.getElementById("city"+x).innerText = dat.location.name;
        document.getElementById("foto"+x).innerHTML = ` <img src="` + dat.image + `">`;
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
                document.getElementById("name"+x).innerText = dat.name;
                document.getElementById("status"+x).innerText = dat.status;
                document.getElementById("specie"+x).innerText = dat.species;
                document.getElementById("city"+x).innerText = dat.location.name;
                document.getElementById("foto"+x).innerHTML = ` <img src="` + dat.image + `">`;
                pagAct = pag;
            })
            .catch(function (error) {
                document.getElementById("name"+x).innerText = "Error: Personaje invalido";
                document.getElementById("status"+x).innerText = "";
                document.getElementById("specie"+x).innerText = "";
                document.getElementById("city"+x).innerText = "";
                document.getElementById("foto"+x).innerHTML = "";
                console.log(error)
            })
    }

}
