let frasesTamagochiRoom
fetch("/json/jsonRoom/frases/frasesHabitacion.JSON")
        .then((response)=>response.json())
        .then((callback)=>{
                frasesTamagochiRoom = callback
            }
        )

function inspeccionarSala(){
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","Inspeccionada la sala",50)
}
function dormir(){
    document.getElementById("textTamagochiLog").textContent = ""
    statsManager("energia","suma",RNG(1,2))
    statsManager("vejiga","resta",RNG(1,2))
    chatTamagochi("habitacion","dormir","dormirTamagochi")
    timePass()
}
function hablar(){
    document.getElementById("textTamagochiLog").textContent = ""
    statsManager("felicidad","suma",RNG(1,2))
    statsManager("saciedad","resta",RNG(1,2))
    chatTamagochi("habitacion","hablar","hablarTamagochi")
    timePass()
}
function verStatsSala(){
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","Tienes " + energia + " puntos de energía y " + felicidad + " puntos de felicidad",15)
}