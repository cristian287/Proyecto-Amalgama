function RNG(min,max){ //Cualquier tipo de azar
    let random = 0
    do{
    random = Math.round(Math.random()*max);
    }while(random < min)
   return random;
}
function unbind(){ //Funcion a llamar para simplificar el recrear nodos
    recreateNode(document.getElementById("botonPeleaUno"))
    recreateNode(document.getElementById("botonPeleaDos"))
    recreateNode(document.getElementById("botonPeleaTres"))
    recreateNode(document.getElementById("botonPeleaCuatro"))
    recreateNode(document.getElementById("botonPeleaCinco"))
}
let skillUno
let skillDos
let skillTres
let skillCuatro
let skillCinco
let skillsCollection
let i = 0
function setSkills(isInitial){//Cambiar los skills. Si isInitial = true se setean las 5 habilidades,
                              //caso contrario se elige una (codigo por hacer)
    fetch("/json/jsonPelea/skills.JSON")
    .then((response)=>response.json())
    .then((skills)=>{
            if (isInitial){
                skillsCollection = skills.filter(e => e.initial === "true") //Coleccion de skills iniciales
                firstSetSkills(skillsCollection[RNG(0,skillsCollection.length - 1)])
            }
        }
    )
}
function firstSetSkills(skill){ //Setear los 5 skills iniciales
    if (skill !== undefined){
        habilidadesEquipadas.push(skill) //cambiar skills
        habilidadesDisponibles.push(skill) //cambiar skills
    }
    skillsCollection = skillsCollection.filter (e=>e !== skill)
    i++
    if (i<6){
        switch(i){
            case 1: skillUno = skill;document.getElementById("botonPeleaUno").textContent = skill.name;break
            case 2: skillDos = skill;document.getElementById("botonPeleaDos").textContent = skill.name;break
            case 3: skillTres = skill;document.getElementById("botonPeleaTres").textContent = skill.name;break
            case 4: skillCuatro = skill;document.getElementById("botonPeleaCuatro").textContent = skill.name;break
            case 5: skillCinco = skill;document.getElementById("botonPeleaCinco").textContent = skill.name;break
        }
        firstSetSkills(skillsCollection[RNG(0,skillsCollection.length - 1)])
    }
    else{
        i = 0
    }
}
setSkills(true) 

function turnoJugador(){
    document.getElementById("botonPeleaUno").addEventListener("click",function e(){unbind()})
    document.getElementById("botonPeleaDos").addEventListener("click",function e(){unbind()})
    document.getElementById("botonPeleaTres").addEventListener("click",function e(){unbind()})
    document.getElementById("botonPeleaCuatro").addEventListener("click",function e(){unbind()})
    document.getElementById("botonPeleaCinco").addEventListener("click",function e(){unbind()})
}