const finDeRonda = document.getElementById("finalRonda")
const textoFinDeRonda = document.getElementById("textoFinalRonda")
document.getElementById("continuarB").addEventListener("click",function(e){
    transicionar(finDeRonda,"desaparecer")
    iniciarGeneracionAutomatica()
})
function cambioDeFase(){
    transicionar(finDeRonda,"aparecer")
    textoFinDeRonda.textContent = "Completada la ronda " + rondaActual
}