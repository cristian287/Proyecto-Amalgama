//Salas existentes
let salaActual 
let primeraEntrada = true //Definir la sala a 0 si es la primera vez que se accede
let maximasSalas = 4 //Cantidad máxima de switch a salas
let obituarioTamagochi
let momento = "mañana"
let dia = 0 //Devolver estas dos variables a sus valores base al perder
function habitacion(){
    salaActual = "hudPrin"
    botones(salaActual)
    mostrarDesaparecer("hudPrin","aparecer")
}
function cocina(){
    salaActual = "hudCocina"
    botones(salaActual)
    mostrarDesaparecer("hudCocina","aparecer")
}
function baño(){
    salaActual = "hudBaño"
    botones(salaActual)
    mostrarDesaparecer("hudBaño","aparecer")
}
function salaDeJuegos(){
   salaActual = "hudSalaDeJuegos"
   botones(salaActual)
   mostrarDesaparecer("hudSalaDeJuegos","aparecer")
}
function sotano(){
    salaActual = "hudSotano"
    botones(salaActual)
    mostrarDesaparecer("hudSotano","aparecer")
}
function unbindBotoneraTamagochi(condition){
    recreateNode(document.getElementById("buttonUnoTamagochiMode"))
    recreateNode(document.getElementById("buttonDosTamagochiMode"))
    recreateNode(document.getElementById("buttonTresTamagochiMode"))
    recreateNode(document.getElementById("buttonCuatroTamagochiMode"))
    if (condition){return}
    botones(salaActual)
}
function botoneraTamagochiHandler(habitacion,callback){
    let uno = document.getElementById("buttonUnoTamagochiMode")
    let dos = document.getElementById("buttonDosTamagochiMode")
    let tres = document.getElementById("buttonTresTamagochiMode")
    let cuatro = document.getElementById("buttonCuatroTamagochiMode")
    switch(habitacion){
        case "hudPrin"         :    uno.addEventListener("click",function(e){inspeccionarSala();unbindBotoneraTamagochi()})
                                    dos.addEventListener("click",function(e){dormir();unbindBotoneraTamagochi()})
                                    tres.addEventListener("click",function(e){hablar();unbindBotoneraTamagochi()})
                                    cuatro.addEventListener("click",function(e){verStatsSala();unbindBotoneraTamagochi()})
                                    break

        case "hudCocina"       :    uno.addEventListener("click",function(e){inspeccionarCocina();unbindBotoneraTamagochi()})
                                    dos.addEventListener("click",function(e){comer();unbindBotoneraTamagochi()})
                                    tres.addEventListener("click",function(e){revisarDespensa();unbindBotoneraTamagochi()})
                                    cuatro.addEventListener("click",function(e){verStatsCocina();unbindBotoneraTamagochi()})
                                    break

        case "hudBaño"         :    uno.addEventListener("click",function(e){inspeccionarBaño();unbindBotoneraTamagochi()})
                                    dos.addEventListener("click",function(e){bañarse();unbindBotoneraTamagochi()})
                                    tres.addEventListener("click",function(e){inodoro();unbindBotoneraTamagochi()})
                                    cuatro.addEventListener("click",function(e){verStatsBaño();unbindBotoneraTamagochi()})
                                    break

        case "hudSalaDeJuegos" :    uno.addEventListener("click",function(e){inspeccionarSalaDeJuegos();unbindBotoneraTamagochi()})
                                    dos.addEventListener("click",function(e){jugar();unbindBotoneraTamagochi()})
                                    tres.addEventListener("click",function(e){cambiarSkills();unbindBotoneraTamagochi()})
                                    cuatro.addEventListener("click",function(e){verSkills();unbindBotoneraTamagochi()})
                                    break

        case "hudSotano"       :    uno.addEventListener("click",function(e){iniciarModoPelea();tamagochiModeOff();unbindBotoneraTamagochi(true)})
                                    dos.addEventListener("click",function(e){iniciarModoPelea();tamagochiModeOff();unbindBotoneraTamagochi(true)})
                                    tres.addEventListener("click",function(e){iniciarModoPelea();tamagochiModeOff();unbindBotoneraTamagochi(true)})
                                    cuatro.addEventListener("click",function(e){iniciarModoPelea();tamagochiModeOff();unbindBotoneraTamagochi(true)})
                                    break
    }
}
function botones(habitacion){
    mostrarDesaparecer("timeOut","aparecer")
    setTimeout(() => {
        mostrarDesaparecer("timeOut","desaparecer")
    }, 2000);
    unbindBotoneraTamagochi(true)
        fetch("/json/jsonRoom/"+habitacion+".JSON")
        .then((response)=>response.json())
        .then((callback)=>{
                document.getElementById("buttonUnoTamagochiMode").textContent = callback[0].inspeccionar
                document.getElementById("buttonDosTamagochiMode").textContent = callback[1].accionUno
                document.getElementById("buttonTresTamagochiMode").textContent = callback[2].accionDos
                document.getElementById("buttonCuatroTamagochiMode").textContent = callback[3].accionTres
                botoneraTamagochiHandler(habitacion,callback)
            }
        )
    
}