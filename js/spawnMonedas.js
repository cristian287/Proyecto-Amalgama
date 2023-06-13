const setSpawnCoins = document.getElementById("moneySpawn")
const monedasRestantes = document.getElementById("coinsH")
function crearMoneda(cantidad){
    const limites = setSpawnCoins.getBoundingClientRect();
    var minX = 0
    var minY = 0
    var maxX = limites.right - 80;
    var maxY = limites.bottom - 80;
    var coordenadaX = RNG(maxX - minX) + minX
    var coordenadaY = RNG(maxY - minY) + minY
    let monedas = document.createElement("div")
    monedas.style.top = coordenadaY + "px";
    monedas.style.left = coordenadaX + "px";
    setSpawnCoins.appendChild(monedas)
    monedas.addEventListener("mouseover",function(e){
        monedas.classList.add("catchCoins")
        monedas.addEventListener("animationend",function(e){
            player.monedas = player.monedas + cantidad
            monedas.remove()
            actualizarValoresPantalla()
        })
    })
}