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
        let armaPrincipal = armas.find(a=>a.nombre === "pistola")
        player.armas.push(armaPrincipal)
    }
    actualizarBalas()
}
function actualizarBalas(){
  divMunicionRestante.textContent = player.armas[player.equipada].balas+"/"+player.armas[player.equipada].balasMaximas
}


asignarTeclas("r",recargar)
asignarTeclas("R",recargar)
asignarTeclas("c",usarBotiquin)
asignarTeclas("C",usarBotiquin)

const divMunicionRestante = document.getElementById("municionRestante")
document.addEventListener("mousemove", function(event) {
  var offsetX = 10; // Valor para alejar el div a la derecha del cursor
  var offsetY = -50; // Valor para alejar el div hacia abajo del cursor

  var mouseX = event.clientX + offsetX;
  var mouseY = event.clientY + offsetY;

  divMunicionRestante.style.left = mouseX + "px";
  divMunicionRestante.style.top = mouseY + "px";
});



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