document.getElementById("placeholderVolverModoTamagochi").addEventListener("click",function(e){modoExploracionOff()})

function modoExploracion(){
    mostrarDesaparecer("gameExploracionHud","aparecer")
}
function modoExploracionOff(){
    mostrarDesaparecer("gameExploracionHud","desaparecer")
    tamagochiMode()
}