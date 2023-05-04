let frasesEnemigoBatalla
fetch("json/jsonPelea/tamagochiEnemigoBatallaFrases.JSON")
        .then((response)=>response.json())
        .then((callback)=>{
                frasesEnemigoBatalla = callback
            }
        )
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
    recreateNode(document.getElementById("close"))
}
let skillUno
let skillDos
let skillTres
let skillCuatro
let skillCinco
let skillsCollection
let fullSkillsCollection
let i = 0


function setSkills(isInitial,skillToAdd){//Cambiar los skills. Si isInitial = true se setean las 5 habilidades,
                              //caso contrario se elige una (codigo por hacer)
    fetch("json/jsonPelea/skills.JSON")
    .then((response)=>response.json())
    .then((skills)=>{
            fullSkillsCollection = skills
            if (isInitial){
                skillsCollection = skills.filter(e => e.initial === "true") //Coleccion de skills iniciales
                firstSetSkills(skillsCollection[RNG(0,skillsCollection.length - 1)])
            }
            else{
                let agregarSkill
                habilidadesDisponibles.forEach(function e(value){
                    if (value.name === skillToAdd.name){

                        agregarSkill = 0
                    }
                })
                if (agregarSkill !== 0){

                    habilidadesDisponibles.push(skillToAdd)
                    mensajeSkill = true

                }
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



let enemigo


let enemigosEspecialesSinDerrotar
let vidaEnemigo
let vidaActualEnemigo
let manaEnemigo
let manaActualEnemigo
let fuerzaEnemigo
let skillsEnemigo
let obituario = document.getElementById("victimObituario")
let vidaJugador
let vidaActualJugador
let manaJugador
let manaActualJugador
let fuerzaJugador



function setStatsJugador(){
    vidaJugador = (Math.round(energia * 0.5) + felicidad + higiene)*20
    vidaActualJugador = vidaJugador
    manaJugador = vejiga + (higiene * 2) * 10
    manaActualJugador = manaJugador
    fuerzaJugador = Math.round((energia + (voracidad * 2) + (Math.round(saciedad * 0.25)) - (felicidad*1.25))*0.5)
    document.getElementById("saludProta").textContent = vidaActualJugador + "/" + vidaJugador
    document.getElementById("energiaProta").textContent = manaActualJugador + "/" + manaJugador
}

function setSkillsEnemigo(){
    enemigo.skills = []

    let skillsOtorgarEnemigo = fullSkillsCollection
    let enemigoEspecial = RNG(0,50)
    if ((enemigosEspecialesSinDerrotar.length !== 0) && (enemigoEspecial === 50)){enemigoEspecial = true}
    for(let i = 0;i<=4;i++){
        let tempSkill = skillsOtorgarEnemigo.filter(e => e.belongsTo === undefined)
        if (i===0){
            if (enemigoEspecial === true){}
            else{tempSkill = tempSkill.filter(e => e.category === "damage")}
        }
        if (i===1){
            if(enemigoEspecial === true){}
            else{tempSkill = tempSkill.filter(e => e.category === "manaReg")}
        }
        tempSkill = tempSkill[RNG(0,tempSkill.length -1)]
        enemigo.skills.push(tempSkill)
        skillsOtorgarEnemigo = skillsOtorgarEnemigo.filter(e=>e.name !== tempSkill.name)

    }
}
let enemigosImagenes
fetch("json/jsonPelea/enemigos.JSON")
        .then((response)=>response.json())
        .then((callback)=>{
                enemigosImagenes = callback
            }
        )
function crearEnemigo(especial){
    let imagenEnemigo = enemigosImagenes
    if (especial !== undefined){imagenEnemigo = imagenEnemigo.filter(e=>e.specialIdentifier === especial)}
    else{imagenEnemigo = imagenEnemigo.filter(e=>e.isSpecial === undefined)}
    enemigo = {
        "life" : RNG(100,400),
        "mp" : RNG(200,400),
        "fuerza" : RNG(1,5),
        "skills" : [],
        "src" : imagenEnemigo[RNG(0,enemigosImagenes.length-1)]
    }
    document.getElementById("victima").src = enemigo.src
    vidaEnemigo = enemigo.life
    vidaActualEnemigo = vidaEnemigo
    manaEnemigo = enemigo.mp
    manaActualEnemigo = manaEnemigo
    fuerzaEnemigo = enemigo.fuerza
    document.getElementById("")
    setSkillsEnemigo()
    skillsEnemigo = enemigo.skills
    document.getElementById("nemesisHeal").textContent = vidaActualEnemigo + "/" + vidaEnemigo
}



function triggerSkill(skill){

    if (skill === "escape"){
        if(RNG(0,10)===10){
            obituario.textContent = "Escapaste exitosamente. Click para continuar"
            timePass()
            obituario.addEventListener("click",function(e){
                tamagochiMode()
                mostrarDesaparecer("gamePeleaHud","desaparecer")
                recreateNode(obituario);
                obituario = document.getElementById("victimObituario")
            })
            return
        }
        else{
            obituario.textContent = "No pudiste escapar!"
            setTimeout(() => {
                if (!checkLifes()){
                  turnoEnemigo()
                }
            }, 2500);
            return
        }
    }
    if ((skill.resource === "mana") && (manaActualJugador < skill.mpDrained)){
        obituario.textContent = "No tienes suficiente mana!"
        setTimeout(() => {
            turnoJugador()
        }, 1000);
        return
    }
    else if ((skill.resource === "life") && (vidaActualJugador <= skill.mpDrained)){
        obituario.textContent = "No tienes suficiente vida!"
        setTimeout(() => {
            turnoJugador()
        }, 1000);
        return
    }
    let minDamageReal = skill.min_damage
    let maxDamageReal = skill.max_damage
    if (skill.resource === "mana"){
        manaActualJugador = manaActualJugador - skill.mpDrained
    }
    else if (skill.resource === "life"){
        vidaActualJugador = vidaActualJugador - skill.mpDrained
    }
    if (fuerzaJugador>1){
        minDamageReal = skill.min_damage * fuerzaJugador
        maxDamageReal = skill.max_damage * fuerzaJugador
    }
    let numeroEfecto = RNG(minDamageReal,maxDamageReal)
  
    if (skill.category === "blind"){skill.category === "damage"}
    switch(skill.category){
        case "damage":      obituario.textContent = "inflinges " + numeroEfecto + " puntos de daño a tu enemigo con " + skill.name;
                            vidaActualEnemigo = vidaActualEnemigo - numeroEfecto;break //ejecutar daño
        case "healing":     obituario.textContent = "Te sanas por " + numeroEfecto + " puntos de vida con " + skill.name;
                            vidaActualJugador = vidaActualJugador + numeroEfecto;
                            break//ejecutar healing
        case "manaReg":     obituario.textContent = "Recuperas " + numeroEfecto + " puntos de mana con " + skill.name
                            manaActualJugador = manaActualJugador + numeroEfecto
                            break
        case "lifesteal":   let sanacion = RNG(1,numeroEfecto)
                            obituario.textContent = "Inflinges " + numeroEfecto + " puntos de daño " + sanacion + " puntos de vida usando " + skill.name
                            vidaActualEnemigo = vidaActualEnemigo - numeroEfecto
                            vidaActualJugador = vidaActualJugador + sanacion
                            break
        case "health":      obituario.textContent = "Aumentas tu salud máxima en " + numeroEfecto + " puntos por este combate"
                            vidaJugador = vidaJugador + numeroEfecto
                            vidaActualJugador = vidaActualJugador + numeroEfecto
                            break
        case "reducHealth": obituario.textContent = "Reduces la salud maxima del enemigo en " + numeroEfecto + " puntos con " + skill.name
                            vidaEnemigo = vidaEnemigo - numeroEfecto
                            break
    }
    let fraseActual = frasesEnemigoBatalla.filter(e=>e.frasesEn === "finTurno")
    document.getElementById("textoEnemigoBatalla").textContent = ""
    autoTypePelea("textoEnemigoBatalla",fraseActual[0].frases[RNG(0,fraseActual[0].frases.length-1)],20)
}
let mensajeSkill
function winBattle(){
    timePass()
    let fraseActual = frasesEnemigoBatalla.filter(e=>e.frasesEn === "muerte")
    document.getElementById("textoEnemigoBatalla").textContent = fraseActual[0].frases[RNG(0,fraseActual[0].frases.length-1)]
    let comidaGanada = RNG(2,3)
    saciedad = saciedad + comidaGanada
    voracidad++
    let skillToDrop = enemigo.skills[RNG(0,enemigo.skills.length-1)]
    mensajeSkill = false

    setSkills(false,skillToDrop)
    let textoHabilidad = ""
    setTimeout(() => {
        if (mensajeSkill){textoHabilidad = " y has ganado una nueva habilidad : " + skillToDrop.name + ", ve a cambiar habilidades para probarla!"}
        obituario.textContent = "Devoraste a tu enemigo y conseguiste " + comidaGanada + " puntos de saciedad " + textoHabilidad + ". Haz click para continuar"
        statsManager("comidaDisponible","suma",comidaGanada)
        document.getElementById("vitimObi").addEventListener("click",function e(){tamagochiMode();recreateNode(document.getElementById("vitimObi"));mostrarDesaparecer("gamePeleaHud","desaparecer")})
    }, 1000);
}
function checkLifes(){
    if (vidaActualEnemigo>vidaEnemigo){
        vidaActualEnemigo = vidaEnemigo
    }
    if (manaActualEnemigo>manaEnemigo){
        manaActualEnemigo = manaEnemigo
    }
    if (vidaActualJugador>vidaJugador){
        vidaActualJugador = vidaJugador
    }
    if (manaActualJugador>manaJugador){
        manaActualJugador = manaJugador
    }
    document.getElementById("nemesisHeal").textContent = vidaActualEnemigo + "/" + vidaEnemigo
    document.getElementById("saludProta").textContent = vidaActualJugador + "/" + vidaJugador
    document.getElementById("energiaProta").textContent = manaActualJugador + "/" + manaJugador
    if (vidaActualEnemigo <= 0){
        winBattle()
        return true
    }
    else if (vidaActualJugador <= 0){
        gameOver("batalla")
        return true
    }
    return false
}
let skillCastEnemy
function turnoEnemigo(){
    document.getElementById("gamePeleaHud").classList.remove("victimHitBlindness")
    document.getElementById("nemesisHeal").textContent = vidaActualEnemigo + "/" + vidaEnemigo
    do{
        skillCastEnemy = enemigo.skills[RNG(0,enemigo.skills.length-1)]
    }while(((manaActualEnemigo<skillCastEnemy.mpDrained) && (skillCastEnemy.resource === "mana")) || ((vidaActualEnemigo<skillCastEnemy.mpDrained)) && (skillCastEnemy.resource === "life"))
    if (skillCastEnemy.resource === "mana"){
        manaActualEnemigo = manaActualEnemigo - skillCastEnemy.mpDrained
    }
    else if (skillCastEnemy.resource === "life"){
        vidaActualEnemigo = vidaActualEnemigo - skillCastEnemy.mpDrained
    }
    let minDamageReal = skillCastEnemy.min_damage
    let maxDamageReal = skillCastEnemy.max_damage
    if (fuerzaEnemigo>1){
        minDamageReal = skillCastEnemy.min_damage * fuerzaEnemigo
        maxDamageReal = skillCastEnemy.max_damage * fuerzaEnemigo
    }
    let numeroEfecto = RNG(minDamageReal,maxDamageReal)
    switch(skillCastEnemy.category){
        case "damage" :     obituario.textContent = "tu enemigo te inflinge " + numeroEfecto + " puntos de daño con " + skillCastEnemy.name
                            vidaActualJugador = vidaActualJugador - numeroEfecto
                            break
        case "healing":     obituario.textContent = "tu enemigo se sana " + numeroEfecto + " puntos de vida con " + skillCastEnemy.name
                            vidaActualEnemigo = vidaActualEnemigo + numeroEfecto
                            break
        case "manaReg":     obituario.textContent = "Tu enemigo recupera " + numeroEfecto + " puntos de mana con " + skillCastEnemy.name
                            manaActualEnemigo = manaActualEnemigo + numeroEfecto
                            break
        case "lifesteal":   let sanacion = RNG(1,numeroEfecto)
                            obituario.textContent = "Tu enemigo te inflinge " + numeroEfecto + " puntos de daño y se sana" + sanacion + " puntos de vida usando " + skillCastEnemy.name
                            vidaActualEnemigo = vidaActualEnemigo + sanacion
                            vidaActualJugador = vidaActualJugador - numeroEfecto
                            break
        case "blind":       obituario.textContent = "Tu enemigo inflinge un potente efecto de ceguera sobre ti!"
                            setTimeout(() => {
                                document.getElementById("gamePeleaHud").classList.add("victimHitBlindness")
                            }, 1200);
                            break
        case "health":      obituario.textContent = "Tu enemigo aumenta su salud máxima en " + numeroEfecto + " puntos con " + skillCastEnemy.name
                            vidaEnemigo = vidaEnemigo + numeroEfecto
                            vidaActualEnemigo = vidaActualEnemigo + numeroEfecto
                            break
        case "reducHealth": obituario.textContent = "Tu enemigo reduce tu salud máxima en " + numeroEfecto + " puntos con " + skillCastEnemy.name
                            vidaJugador = vidaJugador - numeroEfecto
                            break
    }
    setTimeout(() => {
        if (!checkLifes()){
            turnoJugador()
        }
    }, 2500);
}





function turnoJugador(){
    document.getElementById("saludProta").textContent = vidaActualJugador + "/" + vidaJugador
    document.getElementById("energiaProta").textContent = manaActualJugador + "/" + manaJugador
    for(let i=0;i<=4;i++){
        let tomarId
        let skillEjecutar
        switch(i){
            case 0: tomarId = document.getElementById("botonPeleaUno");skillEjecutar = skillUno;break
            case 1: tomarId = document.getElementById("botonPeleaDos");skillEjecutar = skillDos;break
            case 2: tomarId = document.getElementById("botonPeleaTres");skillEjecutar = skillTres;break
            case 3: tomarId = document.getElementById("botonPeleaCuatro");skillEjecutar = skillCuatro;break
            case 4: tomarId = document.getElementById("botonPeleaCinco");skillEjecutar = skillCinco;break
        }
        tomarId.addEventListener("click",function e(){triggerSkill(skillEjecutar);unbind();document.getElementById("vitimText").classList.add("none")})
        tomarId.addEventListener("mouseover",function e(){
            document.getElementById("vitimText").innerHTML = "Nombre : " + skillEjecutar.name +
            "<br/>" + skillEjecutar.description + "<br/> Consume: " + skillEjecutar.resource + ", " + skillEjecutar.mpDrained + 
            "<br/> Categoria : " + skillEjecutar.category + "<br/> Efectua de " + skillEjecutar.min_damage + " a " + skillEjecutar.max_damage + " puntos"
            document.getElementById("vitimText").classList.remove("none")
        })
        tomarId.addEventListener("mouseout",function(e){
            document.getElementById("vitimText").classList.add("none")
        })
    }
    document.getElementById("close").textContent = "Intenta escapar!"
    document.getElementById("close").addEventListener("click",function(){triggerSkill("escape");unbind()})
    obituario.textContent = "Tu turno!"
}