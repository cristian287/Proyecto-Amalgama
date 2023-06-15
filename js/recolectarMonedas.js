function recolectarMonedas(){
    for (let i=0;i<monedasPorRecolectar.length;i++){
        let monedaActual = monedasPorRecolectar[i]
        monedaActual.div.classList.add("catchCoins")
        monedaActual.div.addEventListener("animationend",function(e){
            player.monedas = player.monedas + monedaActual.cantidad
            monedaActual.div.remove()
            actualizarValoresPantalla()
        })
    }
}