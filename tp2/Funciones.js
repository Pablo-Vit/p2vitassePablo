function getCharacter(){
    let id = document.getElementById("CharBox").value
    fetch("https://rickandmortyapi.com/api/character/"+id)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            
            document.getElementById("name").innerText = data.name;
            document.getElementById("status").innerText = data.status;
            document.getElementById("specie").innerText = data.species;
            document.getElementById("city").innerText = data.location.name;
            document.getElementById("foto").scrset = data.image;
            console.log(data);
        })
}
