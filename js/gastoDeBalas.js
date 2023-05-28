var recargando = false
const gameArea = document.getElementById("shootArea")
gameArea.addEventListener("click",function(e){
    let armaEquipada = player.armas[player.equipada]
    if (!recargando){
      if (armaEquipada.balas>0){
        armaEquipada.balas--
      }
    }
    actualizarValoresPantalla()
})
