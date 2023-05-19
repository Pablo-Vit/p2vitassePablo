function getUser(){
    fetch("https://randomuser.me/api/")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        let dat = data.results[0];
        document.getElementById("nombre").innerText = 'Nombre: '+dat.name.first;
        document.getElementById("apellido").innerText = 'Apellido '+dat.name.last;
        document.getElementById("fNac").innerText = 'Fecha de Nacicimiento: '+dat.dob.date.slice(0,10);
        document.getElementById("pais").innerText = 'Pais:'+dat.location.country;
        document.getElementById("prov").innerText = 'Estado:'+dat.location.state;
        document.getElementById("ciudad").innerText = 'Ciudad:'+dat.location.city;
        document.getElementById("foto").innerHTML = '<img src="'+dat.picture.large+'" alt="">';
        console.log(dat);
    })
}