var recargando = false
const gameArea = document.getElementById("shootArea")

function puedeDisparar(){
  gameArea.addEventListener("click", triggerDisparo);
}

function noPuedeDisparar(){
  gameArea.removeEventListener("click", triggerDisparo);
}

function triggerDisparo(){
  let armaEquipada = player.armas[player.equipada]
    if (!recargando){
      if (armaEquipada.balas>0){
        armaEquipada.balas--
      }
    }
    actualizarValoresPantalla()
}