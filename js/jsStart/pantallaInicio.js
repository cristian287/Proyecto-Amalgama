let sala
let leftKey = document.getElementById("left")
let rightKey = document.getElementById("right")
let energia = 10
let felicidad = 10
let higiene = 10
let vejiga = 10
let saciedad = 10
let comidaDisponible = 4
let voracidad = 0
let maxStats = 10
let frasesEnMuerte
fetch("/json/frasesGameOver.JSON")
.then((response)=>response.json())
.then((callback)=>{
        frasesEnMuerte = callback
    }
)
function iniciarJuego(){
    document.getElementById("timeNow").textContent = "Es el dia " + dia + " y es de " + momento
    mostrarDesaparecer("gameOver","desaparecer")
    dia = 0
    momento = "mañana"
	energia = 10
	felicidad = 10
	higiene = 10
	vejiga = 10
	saciedad = 10
	comidaDisponible = 4
	voracidad = 0
    habilidadesEquipadas = []
    pantallaInicio()
}
document.getElementById("volverMenu").addEventListener("click",function(e){iniciarJuego()})



function gameOver(tipo){
    tamagochiModeOff()
    terminarModoPelea()
    let fraseFinal = frasesEnMuerte.filter(e=> e.muertePor === tipo)
    fraseFinal = fraseFinal[0].frases[(RNG(0,fraseFinal[0].frases.length - 1))]
    document.getElementById("razonMuerte").textContent = fraseFinal
	mostrarDesaparecer("gameOver","aparecer")
}

function pantallaInicio(){
    document.getElementById("game").classList.remove("none")
    //Iniciar pantalla de Inicio
}
function salirPantallaInicio(argumento){
    if (argumento){
        tamagochiMode()
        return document.getElementById("game").classList.add("none")
        //Salir de la pantalla e ir al juego
    }
    document.getElementById("game").classList.add("none")
    document.getElementById("comoJugarDisplay").classList.remove("none")
}
document.getElementById("iniciarJuegoBoton").addEventListener("click",function(){salirPantallaInicio(true)})
document.getElementById("comoJugarBoton").addEventListener("click",function(){salirPantallaInicio(false)})
document.getElementById("volverInicio").addEventListener("click",function(){pantallaInicio();document.getElementById("comoJugarDisplay").classList.add("none")})
pantallaInicio()