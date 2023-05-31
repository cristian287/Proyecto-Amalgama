function damage(event, index, enemigoActual) { //El enemigo te hittea
    if (enemigoActual) {
        enemigoActual.style.animation = "none";
        enemigoActual.offsetHeight;
        enemigoActual.style.animation = null;
        player.salud = player.salud - 10;
        salud.style.width = player.salud + "%";
        salud.textContent = player.salud + "%";
    }
    function enemigoRecibeDaño(event, index, enemy) {
        if ((player.armas[player.equipada].balas>0) && (!recargando)){
            enemigosVivos[index].vida--;
            if (enemigosVivos[index].vida === 0) {
                console.log("removiendo el enemigo " + index);
                enemy.remove();
                let existenEnemigosVivos = enemigosVivos.filter(e=>e.vida>0)
                console.log(existenEnemigosVivos.length)
                dropItems()
                if (existenEnemigosVivos.length === 0){
                    enemigosVivos = []
                    indiceEnemigo = -1
                    if (terminarFase){
                        botonCambioDeFase.textContent = "¿Listo para la siguiente fase?"
                    }
                }
            }
        }
    }    
}
  function dropItems(){
    player.balasDisponibles = player.balasDisponibles + (RNG(15))
    municionRestante.textContent = "Balas restantes: " + player.balasDisponibles
}