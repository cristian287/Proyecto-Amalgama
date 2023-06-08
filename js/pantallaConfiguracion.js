const botonReasignarTeclaRecargar = document.getElementById("reasignarTeclaRecargar")
const botonReasignarTeclaUsarBotiquin = document.getElementById("reasignarTeclaBotiquin")

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
        document.addEventListener("keydown",function handleKeyDown(e){
            for (let a in teclas){
                if (e.key.toUpperCase() === teclas[a]){
                    elemento.textContent = tipo + "/" + teclas[tipo]
                    return
                }
            }
            teclas[tipo] = e.key.toUpperCase()
            document.removeEventListener("keydown", handleKeyDown);
            elemento.textContent = tipo + "/" +  teclas[tipo]
        })
    })
}
reasignarTeclas(botonReasignarTeclaRecargar,"recargar")
reasignarTeclas(botonReasignarTeclaUsarBotiquin,"curarse")


document.getElementById("volverAInicio").addEventListener("click",function(e){
    transicionar(pantallaDeConfiguracion,"desaparecer")
    transicionar(pantallaDeInicio,"aparecer")
})
