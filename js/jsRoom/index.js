let sala
let leftKey = document.getElementById("left")
let rightKey = document.getElementById("right")
let energia = 10
let felicidad = 10
let higiene = 10
let vejiga = 10
let saciedad = 10
let comidaDisponible = 4
let voracidad = 0
//DETECCION DE CLICKS
leftKey.addEventListener("click",function(){handlerClickKeys("left")})
rightKey.addEventListener("click",function(){handlerClickKeys("right")})

function autoType(element,text,delay,condicionReEntrada) {
	temp = document.getElementById(element).innerHTML;
	temp = temp.concat(text.charAt(0));
	document.getElementById(element).innerHTML = temp;
	if (text.length > 1) {
		text = text.substr(1);
		setTimeout(autoType,delay,element,text,delay);
	}
	else{
		mostrarDesaparecer("timeOut","desaparecer")
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
		statsManager(statLoss,"resta",1)
		document.getElementById("cartelEmergente").textContent = "perdi 1 punto de " + statLoss + " :("
		document.getElementById("cartelEmergente").classList.add("cartelEmergenteDis")
		setTimeout(() => {
			document.getElementById("cartelEmergente").classList.remove("cartelEmergenteDis")
		}, 6000);
	}
	else if (momento === "mañana"){momento = "noche"}
	document.getElementById("timeNow").textContent = "Es el dia " + dia + " y es de " + momento
}
function statCheck(stat){
	let s
	if (stat>10){s = 10}
	else if (stat<0){s = 0}
	else{s = stat}
	return s
}



function chatTamagochi(sala,value,valueDos){
	mostrarDesaparecer("timeOut","aparecer")
	let toUse
	switch(sala){
		case "habitacion": toUse = frasesTamagochiRoom;break;
		case "baño": toUse = frasesTamagochiBaño;break;
	}
	document.getElementById("cajaTextoSentimientosTamagochi").textContent = ""
	let frase = toUse.filter(e => e.fraseSobre === value)
    frase = frase[0].frases[RNG(0,(frase[0].frases.length - 1))]
	console.log(frase)
	autoType("textTamagochiLog",frase.enHud,5)
	autoType("cajaTextoSentimientosTamagochi",frase.enTamagochi,5)
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
	energia = statCheck(energia)
	felicidad = statCheck(felicidad)
	higiene = statCheck(higiene)
	vejiga = statCheck(vejiga)
	saciedad = statCheck(saciedad)
	comidaDisponible = statCheck(comidaDisponible)
	voracidad = statCheck(voracidad)
}