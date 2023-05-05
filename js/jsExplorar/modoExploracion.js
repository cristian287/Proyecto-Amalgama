document.getElementById("placeholderVolverModoTamagochi").addEventListener("click",function(e){
    modoExploracionOff()
    iniciarModoPelea()
})

function modoExploracion(){
    mostrarDesaparecer("gameExploracionHud","aparecer")
}
function modoExploracionOff(){
    mostrarDesaparecer("gameExploracionHud","desaparecer")
}