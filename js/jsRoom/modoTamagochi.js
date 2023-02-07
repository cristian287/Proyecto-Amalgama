function tamagochiMode(){ //Ir al modo Tamagochi (Entrar en modo deslizable)
    mostrarDesaparecer("flechas","aparecer")
    mostrarDesaparecer("prota","aparecer")
    mostrarDesaparecer("botoneraTamagochi","aparecer")
    mostrarDesaparecer("TextPetRoom","aparecer")
    mostrarDesaparecer("TextPlayerRoom","aparecer")
    if (primeraEntrada){
        document.getElementById("textTamagochiLog").textContent = "Cargando..."
        primeraEntrada = false
        sala = 0
        setTimeout(() => {
            document.getElementById("textTamagochiLog").textContent = "Tamagochi listo!"
        }, 2000);
        
    }
    irSala(sala)
}
function tamagochiModeOff(){ //Apagar el modo tamagochi
    primeraEntrada = true
    mostrarDesaparecer("flechas","desaparecer")
    mostrarDesaparecer("prota","desaparecer")
    mostrarDesaparecer(salaActual,"desaparecer")
    mostrarDesaparecer("botoneraTamagochi","desaparecer")
    mostrarDesaparecer("TextPetRoom","desaparecer")
    mostrarDesaparecer("TextPlayerRoom","desaparecer")
}
function handlerClickKeys(key){ //Detectar una flecha y mover a la sala adecuada
    if (key === "left"){sala = sala - 1}
    else if (key === "right"){sala = sala + 1}
    if (sala < 0){sala = maximasSalas}
    if (sala > maximasSalas){sala = 0}
    mostrarDesaparecer(salaActual,"desaparecer")
    irSala(sala)
}
function irSala(ubicacion){
    switch(ubicacion){
        case 0: habitacion();break;
        case 1: cocina();break;
        case 2: baño();break;
        case 3: salaDeJuegos();break
        case 4: sotano();break
    }
}
function mostrarDesaparecer(nombre,swap){
    console.log(nombre)
    if (swap === "aparecer"){document.getElementById(nombre).classList.remove("none")}
    else{document.getElementById(nombre).classList.add("none")}
}