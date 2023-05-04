let frasesTamagochiRoom
fetch("json/jsonRoom/frases/frasesHabitacion.JSON")
        .then((response)=>response.json())
        .then((callback)=>{
                frasesTamagochiRoom = callback
            }
        )
function inspeccionarSala(){
    goInspect("hudPrin")
}
function dormir(){
    document.getElementById("textTamagochiLog").textContent = ""
    statsManager("energia","suma",RNG(1,5))
    statsManager("vejiga","resta",RNG(1,2))
    chatTamagochi("habitacion","dormir")
    timePass()
}
function hablar(){
    document.getElementById("textTamagochiLog").textContent = ""
    statsManager("felicidad","suma",RNG(1,5))
    statsManager("saciedad","resta",RNG(1,2))
    chatTamagochi("habitacion","hablar")
    timePass()
}
function verStatsSala(){
    mostrarDesaparecer("timeOut","aparecer")
    document.getElementById("textTamagochiLog").textContent = ""
    autoTypeInspect("textTamagochiLog","Tienes " + energia + " puntos de energía, " + felicidad + " puntos de felicidad, " + saciedad + " puntos de saciedad, " + vejiga + " puntos de vejiga y " + higiene + " puntos de higiene",15)
}