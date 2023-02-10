let frasesTamagochiSalaDeJuegos
fetch("/json/jsonRoom/frases/frasesSalaDeJuegos.JSON")
        .then((response)=>response.json())
        .then((callback)=>{
                frasesTamagochiSalaDeJuegos = callback
            }
        )
function inspeccionarSalaDeJuegos(){
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","Inspeccionada la sala de juegos",50)
}
function jugar(){
    document.getElementById("textTamagochiLog").textContent = ""
    chatTamagochi("salaDeJuegos","jugar")
    timePass()
}
function verSkills(){
    document.getElementById("textTamagochiLog").textContent = ""
    mostrarDesaparecer("viewSkills","aparecer")
    mostrarDesaparecer(salaActual,"desaparecer")
    for(let i = 0;i<=4;i++){
        document.getElementById("skill"+i).textContent = "En el boton " + (i+1) + " posees la habilidad " + habilidadesEquipadas[i].name + " la cual gasta " + habilidadesEquipadas[i].mpDrained + " puntos de mana"
    }
    document.getElementById("viewSkills").addEventListener("click",function(e){
        mostrarDesaparecer("viewSkills","desaparecer")
        mostrarDesaparecer(salaActual,"aparecer")
        recreateNode(document.getElementById("viewSkills"))
    })
}
function cambiarSkills(){ //ROTO
    let skillsDisponibles = habilidadesDisponibles
    habilidadesEquipadas.forEach(function e(valorActual,index){
        console.log(valorActual)
        skillsDisponibles = skillsDisponibles.filter(e=>e.name !== valorActual.name)
        console.log(skillsDisponibles)
    })
    document.getElementById("textTamagochiLog").textContent = ""
    autoType("textTamagochiLog","*cambias los skills*",50)
    timePass()
}