//prueba sonidos

function sonido(sonido){
    this.sound = document.createElement("audio")
    this.sound.src = sonido
    this.sound.setAttribute("preload","auto")
    this.sound.setAttribute("controls", "none")
    this.sound.style.display = "none"
    document.body.appendChild(this.sound)
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
