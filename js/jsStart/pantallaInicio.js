function pantallaInicio(){
    document.getElementById("game").classList.remove("none")
    //Iniciar pantalla de Inicio
}
function salirPantallaInicio(argumento){
    if (argumento){
        tamagochiMode()
        return document.getElementById("game").classList.add("none")
        //Salir de la pantalla e ir al juego
    }
    document.getElementById("game").classList.add("none")
    document.getElementById("comoJugarDisplay").classList.remove("none")
}
document.getElementById("iniciarJuegoBoton").addEventListener("click",function(){salirPantallaInicio(true)})
document.getElementById("comoJugarBoton").addEventListener("click",function(){salirPantallaInicio(false)})
document.getElementById("volverInicio").addEventListener("click",function(){pantallaInicio();document.getElementById("comoJugarDisplay").classList.add("none")})
pantallaInicio()