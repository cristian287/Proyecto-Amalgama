const botonReasignarTeclaRecargar = document.getElementById("reasignarTeclaRecargar")
const botonReasignarTeclaUsarBotiquin = document.getElementById("reasignarTeclaBotiquin")
const bloqueoPantallaDeConfiguracion = document.getElementById("replace")
const textoBloqueoPantallaDeConfiguracion = document.getElementById("textoReplace")

let teclas = {
    recargar:"R",
    usarBotiquin:"C"
}
document.addEventListener("keydown",function(e){
    for(let a in teclas){
        if (e.key.toUpperCase() === teclas[a]){
            switch(a){
                case "recargar":recargar();break
                case "usarBotiquin":usarBotiquin();break
            }
        }
    }
})
function reasignarTeclas(elemento,tipo){
    elemento.addEventListener("click",function(){
        textoBloqueoPantallaDeConfiguracion.textContent = "Elige una tecla para reemplazar: " + tipo
        transicionar(bloqueoPantallaDeConfiguracion,"aparecer")
        document.addEventListener("keydown",function handleKeyDown(e){
            for (let a in teclas){
                if (e.key.toUpperCase() === teclas[a]){
                    textoBloqueoPantallaDeConfiguracion.textContent = "Esa tecla ya esta en uso, elige otra"
                    elemento.textContent = tipo + "/" + teclas[tipo]
                    return
                }
            }
            teclas[tipo] = e.key.toUpperCase()
            document.removeEventListener("keydown", handleKeyDown);
            elemento.textContent = tipo + "/" +  teclas[tipo]
            transicionar(bloqueoPantallaDeConfiguracion,"desaparecer")
        })
    })
}
reasignarTeclas(botonReasignarTeclaRecargar,"recargar")
reasignarTeclas(botonReasignarTeclaUsarBotiquin,"curarse")


document.getElementById("volverAInicio").addEventListener("click",function(e){
    transicionar(pantallaDeConfiguracion,"desaparecer")
    transicionar(pantallaDeInicio,"aparecer")
})
