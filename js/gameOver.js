const pantallaMuerte = document.getElementById("dead")
const puntuacionTotalDisplay = document.getElementById("puntuacion")
let puntos
function finDelJuego(){
    noPuedeDisparar()
    transicionar(pantallaMuerte,"aparecer")
    transicionar(pantallaDeJuego,"desaparecer")
    detenerGeneracionAutomatica()
    enemigosVivos = []
    jugadorPierde = true
    puntos = (player.monedas*2) + player.monedasGastadas
    puntuacionTotalDisplay.textContent = "Tu puntuacion: " + puntos
}