document.getElementById("placeholderSalirModoCosecha").addEventListener("click",function(e){
    modoCosechaOff()
})

function modoCosecha(){
    mostrarDesaparecer("modoCosechaHud","aparecer")
}
function modoCosechaOff(){
    mostrarDesaparecer("modoCosechaHud","desaparecer")
    tamagochiMode()
}