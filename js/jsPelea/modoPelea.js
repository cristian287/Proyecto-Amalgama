function iniciarModoPelea(){
    document.getElementById("gamePeleaHud").classList.remove("none")
    //Iniciar modo pelea
}
function terminarModoPelea(){
    document.getElementById("gamePeleaHud").classList.add("none")
}
document.getElementById("close").addEventListener("click",function(){terminarModoPelea();tamagochiMode()})
document.getElementById("buttonUnoTamagochiMode").addEventListener("click",function(){iniciarModoPelea();tamagochiModeOff()})