function inspeccionarCocina(){
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","Inspeccionada la cocina",50)
}
function comer(){
    document.getElementById("textTamagochiLog").textContent = ""
    statsManager("saciedad","suma",RNG(1,2))
    statsManager("comidaDisponible","resta",1)
    statsManager("voracidad","suma",RNG(1,2))
    statsManager("vejiga","resta",RNG(1,2))
    autoType("textTamagochiLog","Te comes un tamagochi",50)
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
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","Tienes " + saciedad + " puntos de saciedad",15)
}