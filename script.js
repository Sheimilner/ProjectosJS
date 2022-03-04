let input = document.querySelector("input")
let enter = document.querySelector("button")
let nombreCiudad =document.querySelector("#ciudad")
let temperatura =document.querySelector("#temperatura")
let icono = document.querySelector("#wicon")
let descripcion = document.querySelector("#descripcion")


function cargarCiudad(ciudad) {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data) {
        nombreCiudad.textContent = data.name
        temperatura.textContent=Math.round(((data.main.temp)*10))/10
        temperatura.innerHTML+="<sup>°C</sup>"
        icono.src = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png"
        descripcion.textContent=data.weather[0].description
        document.querySelector(".container").style.visibility = "visible"

    })
    .fail(function() {
        alert("Ciudad no encontrada");
    })
}

enter.addEventListener("click", function(){
    if(input.value===""){
        alert("Inserte el nombre de una ciudad")
    }else{
        let ciudad = input.value.split(" ").join("%20")
        input.value=""
        

    cargarCiudad(ciudad)
}
})

document.body.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
    if(input.value===""){
        alert("Inserte el nombre de una ciudad")
    }else{
        let ciudad = input.value.split(" ").join("%20")
        input.value=""
        

    cargarCiudad(ciudad)
}}
})