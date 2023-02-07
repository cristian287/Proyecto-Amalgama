function inspeccionarBaño(){
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","Inspeccionado el baño",50)
}
function bañarse(){
    document.getElementById("textTamagochiLog").textContent = ""
    statsManager("higiene","suma",RNG(1,2))
    statsManager("energia","resta",RNG(1,2))
    statsManager("felicidad","resta",RNG(1,2))
    autoType("textTamagochiLog","Hay alguien mirando por la ventana..",50)
}
function inodoro(){
    document.getElementById("textTamagochiLog").textContent = ""
    statsManager("vejiga","suma",RNG(1,2))
    statsManager("saciedad","resta",RNG(1,2))
    statsManager("higiene","resta",RNG(1,2))
    autoType("textTamagochiLog","*mea*",50)
}
function verStatsBaño(){
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","Tienes " + vejiga + " puntos de vejiga y " + higiene + " puntos de higiene",15)
}