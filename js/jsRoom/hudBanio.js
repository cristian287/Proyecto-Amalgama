let frasesTamagochiBanio
fetch("json/jsonRoom/frases/frasesBanio.JSON")
        .then((response)=>response.json())
        .then((callback)=>{
                frasesTamagochiBanio = callback
            }
        )


function inspeccionarBanio(){
    goInspect("hudBanio")
}
function baniarse(){
    document.getElementById("textTamagochiLog").textContent = ""
    statsManager("higiene","suma",RNG(1,5))
    statsManager("energia","resta",RNG(1,2))
    statsManager("felicidad","resta",RNG(1,2))
    chatTamagochi("banio","baniarse")
    timePass()
}
function inodoro(){
    document.getElementById("textTamagochiLog").textContent = ""
    statsManager("vejiga","suma",RNG(1,5))
    statsManager("saciedad","resta",RNG(1,2))
    statsManager("higiene","resta",RNG(1,2))
    chatTamagochi("banio","irBanio")
    timePass()
}
function verStatsBanio(){
    mostrarDesaparecer("timeOut","aparecer")
    document.getElementById("textTamagochiLog").textContent = ""
    autoTypeInspect("textTamagochiLog","Tienes " + energia + " puntos de energía, " + felicidad + " puntos de felicidad, " + saciedad + " puntos de saciedad, " + vejiga + " puntos de vejiga y " + higiene + " puntos de higiene",15)
}
