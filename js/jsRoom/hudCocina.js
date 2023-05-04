let frasesTamagochiCocina
fetch("json/jsonRoom/frases/frasesCocina.JSON")
        .then((response)=>response.json())
        .then((callback)=>{
                frasesTamagochiCocina = callback
            }
        )
function inspeccionarCocina(){
    goInspect("hudCocina")
}
function comer(){
    document.getElementById("textTamagochiLog").textContent = ""
    if (comidaDisponible>0){
        statsManager("saciedad","suma",RNG(1,5))
        statsManager("comidaDisponible","resta",1)
        statsManager("voracidad","suma",RNG(1,2))
        statsManager("vejiga","resta",RNG(1,2))
        chatTamagochi("cocina","comer")
        timePass()
    }
    else{
       chatTamagochi("cocina","sinComidaDisponible")
    }
}
function revisarDespensa(){
    document.getElementById("textTamagochiLog").textContent = ""
    if (comidaDisponible>0){
        autoType("textTamagochiLog","Te quedan " + comidaDisponible + " pedazos de carne",50)
    }
    else{
        autoType("textTamagochiLog","No tenes mas carne",50)
    }
}
function verStatsCocina(){
    mostrarDesaparecer("timeOut","aparecer")
    document.getElementById("textTamagochiLog").textContent = ""
    autoTypeInspect("textTamagochiLog","Tienes " + energia + " puntos de energía, " + felicidad + " puntos de felicidad, " + saciedad + " puntos de saciedad, " + vejiga + " puntos de vejiga y " + higiene + " puntos de higiene",15)
}
