const botonIniciarJuego = document.getElementById("startGameB")
const botonComoJugar = document.getElementById("HowToPlayB")
const botonConfigurarControles = document.getElementById("configurationB")


botonIniciarJuego.addEventListener("click",()=>{irAInicioDeJuego()})
botonComoJugar.addEventListener("click",()=>{irAComoJugar()})
botonConfigurarControles.addEventListener("click",()=>{irAConfigurarBotones()})

const pantallaDeJuego = document.getElementById("shoot")
const pantallaDeInicio = document.getElementById("start")

function irAInicioDeJuego(){
    displayPantallaDeCarga(true)
    setTimeout(() => { //Delay irreal para ver la pantalla de carga
        transicionar(pantallaDeJuego,"aparecer")
        transicionar(pantallaDeInicio,"desaparecer")
        displayPantallaDeCarga(false)
        iniciarGameplay()
    }, 2000);
    
}

function irAComoJugar(){

}

function irAConfigurarBotones(){

}

function transicionar(elemento,estado){
    console.log(elemento)
    console.log(estado)
    if (estado=="aparecer"){elemento.classList.remove("none");return}
    elemento.classList.add("none")
}