const botiquinesRestantes = document.getElementById("aidkitH")
const saludRestantePlayer = document.getElementById("health")
function usarBotiquin(){
    if ((player.botiquinesDisponibles>0) && (player.salud<100)){
        player.salud = player.salud + 10
        if (player.salud>100){player.salud=100}
        player.botiquinesDisponibles --
    }
    actualizarValoresPantalla()
}