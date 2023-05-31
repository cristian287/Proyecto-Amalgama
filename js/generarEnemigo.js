let enemigosVivos = []
const spriteEnemigos = ["soyUnSpriteDeEnemigo"]

var enemigoGenerico = {
    vida:3
}

var indiceEnemigo = -1;

var generadorEnemigos;

var terminarFase

function generarEnemigo() {
    indiceEnemigo++;
    crearEnemigo(indiceEnemigo);
}


function iniciarGeneracionAutomatica() {
    var intervalo = 1000;
    generarEnemigo();
    generadorEnemigos = setInterval(function () {
      generarEnemigo();
      intervalo -= 50;
      if (intervalo <= 0) {
        terminarFase = true
        detenerGeneracionAutomatica()
        intervalo = 1000
    
        enemigoGenerico.vida += 3
      }
    }, intervalo);
  }
  
  function detenerGeneracionAutomatica() {
    clearInterval(generadorEnemigos);
  }
  //botonCambioDeFase.textContent = "fase " + (enemigoGenerico.vida/3)



  function crearEnemigo(index) {
    let spriteEnemigoActual = spriteEnemigos[RNG(spriteEnemigos.length-1)] //Definir la imagen del enemigo
    var nuevoEnemigo = document.createElement("div");//Crear al enemigo
    nuevoEnemigo.id = "enemy";
    let animacion
    switch(RNG(4)){ //Definir como se movera el enemigo
      case 0:
        animacion = "moveOne"
        break
      case 1:
        animacion = "moveTwo"
        break
      case 2:
        animacion = "moveThree"
        break
      case 3:
        animacion = "moveFour"
        break
      case 4:
        animacion = "moveFive"
      break      
    }
    nuevoEnemigo.classList.add(animacion,spriteEnemigoActual) //Agregar las clases
    var spawnPoints = document.getElementById("spawnPoints");
    spawnPoints.appendChild(nuevoEnemigo);
    enemigosVivos.push({
       index: index,
       vida: enemigoGenerico.vida,
       indiceBorrar: nuevoEnemigo,
       imagen: spriteEnemigoActual
      });
    nuevoEnemigo.addEventListener("animationend", function (event) {
      damage(event, index, nuevoEnemigo);
    });
    nuevoEnemigo.addEventListener("click", function (event) {
      enemigoRecibeDaño(event, index, nuevoEnemigo);
    });
  }
  