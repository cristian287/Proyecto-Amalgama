//Salas existentes
let salaActual 
let primeraEntrada = true //Definir la sala a 0 si es la primera vez que se accede
let maximasSalas = 2 //Cantidad máxima de switch a salas
function habitacion(){
    salaActual = "hudPrin"
    botones(salaActual)
    mostrarDesaparecer("hudPrin","aparecer")
    //interacciones de la habitacion
}
function cocina(){
    salaActual = "hudCocina"
    botones(salaActual)
    mostrarDesaparecer("hudCocina","aparecer")
    //interacciones de la cocina
}
function baño(){
    salaActual = "hudBaño"
    botones(salaActual)
    mostrarDesaparecer("hudBaño","aparecer")
}
function gimnasio(){
    salaActual = "hudGimnasio"
    botones(salaActual)
    mostrarDesaparecer("hudGimnasio","aparecer")
}

function botones(habitacion){  //CAMBIAR POR JSON
    document.getElementById("buttonUnoTamagochiMode").textContent = "Inspeccionar " + habitacion
    document.getElementById("buttonDosTamagochiMode").textContent = "Accion 1 " + habitacion 
    document.getElementById("buttonTresTamagochiMode").textContent = "Accion 2 " + habitacion 
    document.getElementById("buttonCuatroTamagochiMode").textContent = "Accion 3 " + habitacion
}