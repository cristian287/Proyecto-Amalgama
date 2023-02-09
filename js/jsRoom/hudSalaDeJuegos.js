let frasesTamagochiSalaDeJuegos
fetch("/json/jsonRoom/frases/frasesSalaDeJuegos.JSON")
        .then((response)=>response.json())
        .then((callback)=>{
                frasesTamagochiSalaDeJuegos = callback
            }
        )
function inspeccionarSalaDeJuegos(){
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","Inspeccionada la sala de juegos",50)
}
function jugar(){
    document.getElementById("textTamagochiLog").textContent = ""
    chatTamagochi("salaDeJuegos","jugar")
    timePass()
}
function verSkills(){
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","*Miras tus skills*",50)
}
function cambiarSkills(){
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","*cambias los skills*",50)
    timePass()
}