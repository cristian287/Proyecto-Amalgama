let player
const armas = [{ //Armas adquiridas
    nombre:"pistola",
    balas:10,
    balasMaximas:10,
    recarga:"full",
    tiempoRecarga:200
  },
  {
    nombre:"secundaria",
    balas:15,
    balasMaximas:15,
    recarga:"individual",
    tiempoRecarga:10
  },
  {
    nombre:"terciaria",
    balas:20,
    balasMaximas:20,
    recarga:"full",
    tiempoRecarga:500
  }]
function iniciarGameplay(){
    player = { //Stats del jugador
        armas: [],
        salud:100,
        equipada:0, //Index del arma equipada
        armasDisponibles:0, //Cantidad de armas disponibles
        balasDisponibles:10, //Cantidad de balas disponibles para recargar
        botiquinesDisponibles:2, //Cantidad de botiquines disponibles
      }
    if (player.armas.length === 0){
        let armaPrincipal = armas.find(a=>a.nombre === "primaria")
        player.armas.push(armaPrincipal)
    }
}

asignarTeclas("r",recargar)
asignarTeclas("R",recargar)
asignarTeclas("c",usarBotiquin)
asignarTeclas("C",usarBotiquin)


function asignarTeclas(tecla,efecto){
    document.addEventListener("keydown",function(e){
        if (e.key === tecla){
            efecto()
        }
    })
}

function recargar(){
    console.log("recargando")
}
function usarBotiquin(){
    console.log("usando botiquin")
}