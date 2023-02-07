let frasesTamagochiBaño
fetch("/json/jsonRoom/frases/frasesBaño.JSON")
        .then((response)=>response.json())
        .then((callback)=>{
                frasesTamagochiBaño = callback
            }
        )


function inspeccionarBaño(){
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","Inspeccionado el baño",50)
}
function bañarse(){
    document.getElementById("textTamagochiLog").textContent = ""
    statsManager("higiene","suma",RNG(1,2))
    statsManager("energia","resta",RNG(1,2))
    statsManager("felicidad","resta",RNG(1,2))
    chatTamagochi("baño","bañarse","bañarseTamagochi")
    timePass()
}
function inodoro(){
    document.getElementById("textTamagochiLog").textContent = ""
    statsManager("vejiga","suma",RNG(1,2))
    statsManager("saciedad","resta",RNG(1,2))
    statsManager("higiene","resta",RNG(1,2))
    chatTamagochi("baño","irBaño","irBañoTamagochi")
    timePass()
}
function verStatsBaño(){
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","Tienes " + vejiga + " puntos de vejiga y " + higiene + " puntos de higiene",15)
}
