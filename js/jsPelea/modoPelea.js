function iniciarModoPelea(){
    obituario.textContent = ""
    let fraseActual = frasesEnemigoBatalla.filter(e=>e.frasesEn === "entrada")
    document.getElementById("textoEnemigoBatalla").textContent = fraseActual[0].frases[RNG(0,fraseActual[0].frases.length-1)]
    document.getElementById("gamePeleaHud").classList.remove("none")
    crearEnemigo()
    setStatsJugador()
    turnoJugador()
    //Iniciar modo pelea
}
function terminarModoPelea(){
    document.getElementById("gamePeleaHud").classList.add("none")
}
function autoTypePelea(element,text,delay){
	temp = document.getElementById(element).innerHTML;
	temp = temp.concat(text.charAt(0));
	document.getElementById(element).innerHTML = temp;
	if (text.length > 1) {
		text = text.substr(1);
		setTimeout(autoTypePelea,delay,element,text,delay);
	}
	else{
        setTimeout(() => {
            if (!checkLifes()){
              turnoEnemigo()
            }
        }, 1000);
	}
}