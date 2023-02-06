function RNG(min,max){
    let random = 0
    do{
    random = Math.round(Math.random()*max);
    }while(random < min)
   return random;
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
    fetch("/js/jsPelea/skills.JSON")
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
    skillsCollection = skillsCollection.filter (e=>e !== skill)
    i++
    if (i<6){
        switch(i){
            case 1: skillUno = skill;document.getElementById("botonPeleaUno").textContent = skill.name;break
            case 2: skillDos = skill;document.getElementById("botonPeleaDos").textContent = skill.name;break
            case 3: skillDos = skill;document.getElementById("botonPeleaTres").textContent = skill.name;break
            case 4: skillDos = skill;document.getElementById("botonPeleaCuatro").textContent = skill.name;break
            case 5: skillDos = skill;document.getElementById("botonPeleaCinco").textContent = skill.name;break
        }
        firstSetSkills(skillsCollection[RNG(0,skillsCollection.length - 1)])
    }
    else{
        i = 0
    }
}
setSkills(true)