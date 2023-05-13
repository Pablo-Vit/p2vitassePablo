let pagAct = 0;
let info;
let cols = 2;
let eps = [];
let names = [];
function getCharacters() {
    for(let i = 1; i < cols+1; i++)
    {
        let id = document.getElementById("CharBox"+i).value;
        id = parseInt(id);
        let pag = parseInt(id / 20) + 1;
        let rId = (id % 20) - 1;
        if (pag == pagAct) {
            if(id > 0)
            {
                let dat = info.results[rId]
                document.getElementById("name"+i).innerText = dat.name;
                document.getElementById("status"+i).innerText = dat.status;
                document.getElementById("specie"+i).innerText = dat.species;
                document.getElementById("city"+i).innerText = dat.location.name;
                document.getElementById("foto"+i).innerHTML = ` <img src="` + dat.image + `">`;
                eps.push(dat.episode.length);
                names.push(dat.name);
                comparar();
            } else{
                document.getElementById("name"+i).innerText = "Error: Personaje invalido";
                document.getElementById("status"+i).innerText = "";
                document.getElementById("specie"+i).innerText = "";
                document.getElementById("city"+i).innerText = "";
                document.getElementById("foto"+i).innerHTML = "";
            }
        } else {
            fetch("https://rickandmortyapi.com/api/character/?page=" + pag)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    let dat = data.results[rId]
                    info = data;
                    console.log(dat);
                    document.getElementById("name"+i).innerText = dat.name;
                    document.getElementById("status"+i).innerText = dat.status;
                    document.getElementById("specie"+i).innerText = dat.species;
                    document.getElementById("city"+i).innerText = dat.location.name;
                    document.getElementById("foto"+i).innerHTML = ` <img src="` + dat.image + `">`;
                    pagAct = pag;
                    eps.push(dat.episode.length);
                    names.push(dat.name);
                    comparar();
                })
                .catch(function (error) {
                    document.getElementById("name"+i).innerText = "Error: Personaje invalido";
                    document.getElementById("status"+i).innerText = "";
                    document.getElementById("specie"+i).innerText = "";
                    document.getElementById("city"+i).innerText = "";
                    document.getElementById("foto"+i).innerHTML = "";
                    console.log(error)
                })
        }
    }
}

let con = 0;
function comparar()
{
    con++;
    if(con == cols){
        let maxeps = 0;
        for(let i = 0; i < cols; i++){
            if(maxeps < eps[i]){
                maxeps=eps[i];
            }
        }
        con = 0;
        let iguales = 0;
        let igualNames = '';
        for(let i = 0; i < cols; i++){
            if(maxeps == eps[i]){
                iguales++;
                if(iguales > 1) {igualNames+=' y '+names[i];}
                else {igualNames+=names[i];}
            }   
        }
        if(iguales == 1){
            document.getElementById("qdm").innerText = igualNames+' aparece en mas episodios con '+ maxeps;
        } else if(iguales > 1) {
            document.getElementById("qdm").innerText = 'Aparecen en la misma cantidad de episodios '+igualNames+' con '+ maxeps;
        }
        eps.length = 0;
        names.length = 0;
    }
}