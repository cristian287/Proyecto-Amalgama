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

function autoType(element,text,delay) {
	temp = document.getElementById(element).innerHTML;
	temp = temp.concat(text.charAt(0));
	document.getElementById(element).innerHTML = temp;
	if (text.length > 1) {
		text = text.substr(1);
		setTimeout(autoType,delay,element,text,delay);
	}
}
function statCheck(stat){
	let s
	if (stat>10){s = 10}
	else if (stat<0){s = 0}
	else{s = stat}
	return s
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