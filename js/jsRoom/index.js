//DETECCION DE CLICKS
leftKey.addEventListener("click",function(){handlerClickKeys("left")})
rightKey.addEventListener("click",function(){handlerClickKeys("right")})
let inspeccionarJson
fetch("json/jsonRoom/inspeccionar.JSON")
.then((response)=>response.json())
.then((callback)=>{
	inspeccionarJson = callback
})

let unlock
let habilidadesEquipadas = [] //cambiar skills
let habilidadesDisponibles = [] //cambiar skills

function recreateNode(el, withChildren) { //Recrear el nodo para sacarle los eventos
    if (withChildren) {
        el.parentNode.replaceChild(el.cloneNode(true), el);
    }
    else {
        var newEl = el.cloneNode(false);
        while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
        el.parentNode.replaceChild(newEl, el);
    }
}




function autoType(element,text,delay,conditionEnd){
	if (conditionEnd){unlock = true}
	temp = document.getElementById(element).innerHTML;
	temp = temp.concat(text.charAt(0));
	document.getElementById(element).innerHTML = temp;
	if (text.length > 1) {
		text = text.substr(1);
		setTimeout(autoType,delay,element,text,delay);
	}
	else{
		if (unlock){
			unlock = false
			setTimeout(() => {
				mostrarDesaparecer("timeOut","desaparecer")
			}, 1000);
			
		}
	}
}

function autoTypeInspect(element,text,delay){
	temp = document.getElementById(element).innerHTML;
	temp = temp.concat(text.charAt(0));
	document.getElementById(element).innerHTML = temp;
	if (text.length > 1) {
		text = text.substr(1);
		setTimeout(autoTypeInspect,delay,element,text,delay);
	}
	else{
		setTimeout(() => {
			mostrarDesaparecer("timeOut","desaparecer")
		}, 1000);
	}
}















function timePass(){
	if (momento === "noche"){
		dia++
		momento = "mañana"
		let statLoss = RNG(0,3)
		switch (statLoss){
			case 0: statLoss = "energia";break;
			case 1: statLoss = "felicidad";break;
			case 2: statLoss = "vejiga";break;
			case 3: statLoss = "saciedad";break;
		}
		let number = RNG(1,3)
		statsManager(statLoss,"resta",number)
		document.getElementById("cartelEmergente").textContent = "perdi " + number + " puntos de " + statLoss + " :("
		document.getElementById("cartelEmergente").classList.add("cartelEmergenteDis")
		setTimeout(() => {
			document.getElementById("cartelEmergente").classList.remove("cartelEmergenteDis")
		}, 6000);
	}
	else if (momento === "mañana"){momento = "noche"}
	document.getElementById("timeNow").textContent = "Es el dia " + dia + " y es de " + momento
}









function statCheck(stat,deathStat){
	let s
	if (stat>maxStats){stat = maxStats}
	else if (stat<=0){
		stat = 0
		switch(deathStat){
			case "energia" : gameOver("energia");break;
			case "felicidad" : gameOver("felicidad");break
			case "saciedad" : gameOver("saciedad");break
		}
	}
	if ((deathStat === "voracidad") && (stat >= 10)){
		gameOver("voracidad")
	}
	else{s = stat}
	return s
}



function chatTamagochi(sala,value){
	mostrarDesaparecer("timeOut","aparecer")
	let toUse
	switch(sala){
		case "habitacion": toUse = frasesTamagochiRoom;break;
		case "banio": toUse = frasesTamagochiBanio;break;
		case "cocina": toUse = frasesTamagochiCocina;break;
		case "salaDeJuegos" : toUse = frasesTamagochiSalaDeJuegos;break;
	}
	document.getElementById("cajaTextoSentimientosTamagochi").textContent = ""
	let frase = toUse.filter(e => e.fraseSobre === value)
    frase = frase[0].frases[RNG(0,(frase[0].frases.length - 1))]
	autoType("textTamagochiLog",frase.enHud,20)
	setTimeout(() => {
		autoType("cajaTextoSentimientosTamagochi",frase.enTamagochi,20,true)
	}, frase.enHud.length*40);
}



function statsManager(punto,operacion,cantidad){
	if (operacion === "suma"){
		switch(punto){
			case "energia": energia = energia + cantidad;break;
			case "felicidad" : felicidad = felicidad + cantidad;break;
			case "higiene" : higiene = higiene + cantidad;break;
			case "vejiga" : vejiga = vejiga + cantidad;break;
			case "saciedad" : saciedad = saciedad + cantidad;break;
			case "comidaDisponible" : comidaDisponible = comidaDisponible + cantidad;break;
			case "voracidad" : voracidad = voracidad + cantidad;break;
		}
	}
	else if (operacion === "resta"){
		switch(punto){
			case "energia": energia = energia - cantidad;break;
			case "felicidad" : felicidad = felicidad - cantidad;break;
			case "higiene" : higiene = higiene - cantidad;break;
			case "vejiga" : vejiga = vejiga - cantidad;break;
			case "saciedad" : saciedad = saciedad - cantidad;break;
			case "comidaDisponible" : comidaDisponible = comidaDisponible - cantidad;break;
			case "voracidad" : voracidad = voracidad - cantidad;break;
		}
	}
	energia = statCheck(energia,"energia")
	felicidad = statCheck(felicidad,"felicidad")
	higiene = statCheck(higiene)
	vejiga = statCheck(vejiga)
	saciedad = statCheck(saciedad,"saciedad")
	comidaDisponible = statCheck(comidaDisponible)
	voracidad = statCheck(voracidad,"voracidad")
}


function goInspect(sala){
    iSala = inspeccionarJson.filter(e=>e.sala === sala)

    let selectAction = RNG(0,10)
    if (selectAction === 10){
        selectAction = 0
    }
    else{
        selectAction = 1
    }
    mostrarDesaparecer("timeOut","aparecer")
    let mensaje
    selectAction
    switch(selectAction){
        case 0:{ //ENCONTRAR COMIDA
            iSala = iSala[0].accion[0].encontrarComida[0]
            let minComida = iSala.min
            let maxComida = iSala.max
            let comidaDropeada = RNG(minComida,maxComida)
            mensaje = iSala.mensaje[RNG(0,iSala.mensaje.length - 1)]
            mensaje = mensaje.replace("X",comidaDropeada)
            statsManager("comidaDisponible","suma",comidaDropeada)
			statsManager("voracidad","resta",1)
            break
        }
        case 1:{//NO ENCONTRAR NADA
            iSala = iSala[0].accion[0].noEncontrarNada[0].frases
            mensaje = iSala[RNG(0,iSala.length-1)]
			statsManager("voracidad","resta",1)
        }
    }
    document.getElementById("textTamagochiLog").textContent = ""
    autoTypeInspect("textTamagochiLog",mensaje,50)
    timePass()
}