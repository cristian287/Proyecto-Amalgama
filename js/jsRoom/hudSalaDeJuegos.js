let frasesTamagochiSalaDeJuegos
for(let i = 0;i<=44;i++){
    let newDiv = document.createElement("div")
    let newButton = document.createElement("button")
    let texto = document.createTextNode("Slot de habilidad vacio")
    newDiv.appendChild(newButton)
    newButton.appendChild(texto)
    newButton.setAttribute("id",("skillAdquirido"+i))
    let idInsert = document.getElementById("selecSkills")
    idInsert.appendChild(newDiv)
}
fetch("/json/jsonRoom/frases/frasesSalaDeJuegos.JSON")
        .then((response)=>response.json())
        .then((callback)=>{
                frasesTamagochiSalaDeJuegos = callback
            }
        )
function inspeccionarSalaDeJuegos(){
    goInspect("hudSalaDeJuegos")
}
function jugar(){
    document.getElementById("textTamagochiLog").textContent = ""
    chatTamagochi("salaDeJuegos","jugar")
    timePass()
}
function verSkills(){
    document.getElementById("textTamagochiLog").textContent = ""
    mostrarDesaparecer("viewSkills","aparecer")
    mostrarDesaparecer("flechas","desaparecer")
    mostrarDesaparecer("prota","desaparecer")
    mostrarDesaparecer(salaActual,"desaparecer")
    mostrarDesaparecer("TextPetRoom","desaparecer")
    for(let i = 0;i<=4;i++){
        document.getElementById("skill"+i).textContent = "En el boton " + (i+1) + " posees la habilidad " + habilidadesEquipadas[i].name + " la cual gasta " + habilidadesEquipadas[i].mpDrained + " puntos de mana"
    }
    document.getElementById("viewSkills").addEventListener("click",function(e){
        mostrarDesaparecer("viewSkills","desaparecer")
        mostrarDesaparecer(salaActual,"aparecer")
        mostrarDesaparecer("flechas","aparecer")
        mostrarDesaparecer("prota","aparecer")
        mostrarDesaparecer("TextPetRoom","aparecer")
        recreateNode(document.getElementById("viewSkills"))
    })
}
let skillPorAgregar
function cambiarSkills(){ //ROTO
    let skillsDisponibles = habilidadesDisponibles
    habilidadesEquipadas.forEach(function e(valorActual,index){
        skillsDisponibles = skillsDisponibles.filter(e=>e.name !== valorActual.name)
    })
    if (skillsDisponibles.length > 0){
        timePass()
        tamagochiModeOff()
        mostrarDesaparecer("selecSkills","aparecer")
        skillsDisponibles.forEach(function e (value,index){
            let elemento = document.getElementById("skillAdquirido"+index)
            elemento.textContent = value.name
            elemento.addEventListener("click",function(s){
                skillPorAgregar = value
                replaceSkill(value)
                skillsDisponibles.forEach(function a(value,index){
                    recreateNode(document.getElementById("skillAdquirido"+index))
                })
            })
        })
    }
    else{
        document.getElementById("textTamagochiLog").textContent = "No tienes ninguna skill ademas de las equipadas!"
    }
    
}
function type(){

}
function replaceSkill(value){
    mostrarDesaparecer("selecSkills","desaparecer")
    mostrarDesaparecer("cambiarSkills","aparecer")
    document.getElementById("skillChange").textContent = "Toca la habilidad a cambiar por " + value.name
    let b1 = document.getElementById("botonPeleaCambioUno")
    let b2 = document.getElementById("botonPeleaCambioDos")
    let b3 = document.getElementById("botonPeleaCambioTres")
    let b4 = document.getElementById("botonPeleaCambioCuatro")
    let b5 = document.getElementById("botonPeleaCambioCinco")
    
    let button = document.getElementById("botonPeleaUno")
    let buttonDos = document.getElementById("botonPeleaDos")
    let buttonTres = document.getElementById("botonPeleaTres")
    let buttonCuatro = document.getElementById("botonPeleaCuatro")
    let buttonCinco = document.getElementById("botonPeleaCinco")
    
    for(i=0;i<=4;i++){
        let a
        let aSkill
        switch(i){
            case 0: a = b1;aSkill = skillUno;break
            case 1: a = b2;aSkill = skillDos;break
            case 2: a = b3;aSkill = skillTres;break
            case 3: a = b4;aSkill = skillCuatro;break
            case 4: a = b5;aSkill = skillCinco;break
        }
        a.textContent = aSkill.name
    }
    b1.addEventListener("click",function e(){end(value,skillUno);skillUno = value,button.textContent = value.name;unbindPeleaButton()})
    b2.addEventListener("click",function e(){end(value,skillDos);skillDos = value,buttonDos.textContent = value.name;unbindPeleaButton()})
    b3.addEventListener("click",function e(){end(value,skillTres);skillTres = value,buttonTres.textContent = value.name;unbindPeleaButton()})
    b4.addEventListener("click",function e(){end(value,skillCuatro);skillCuatro = value,buttonCuatro.textContent = value.name;unbindPeleaButton()})
    b5.addEventListener("click",function e(){end(value,skillCinco);skillCinco = value,buttonCinco.textContent = value.name;unbindPeleaButton()})
    function end(value,skill){
        let index = habilidadesEquipadas.indexOf(skill)+1
        console.log("reemplazando la habilidad " + skill.name + " por la habilidad " + value.name + " en el index " + index)
        habilidadesEquipadas[habilidadesEquipadas.indexOf(skill)] = value
        mostrarDesaparecer("cambiarSkills","desaparecer")
        primeraEntrada = false
        document.getElementById("textTamagochiLog").textContent = "El cambio de habilidades fue exitoso!"
        tamagochiMode()
    }
}
function unbindPeleaButton (){
    recreateNode(document.getElementById("botonPeleaCambioUno"))
    recreateNode(document.getElementById("botonPeleaCambioDos"))
    recreateNode(document.getElementById("botonPeleaCambioTres"))
    recreateNode(document.getElementById("botonPeleaCambioCuatro"))
    recreateNode(document.getElementById("botonPeleaCambioCinco"))
}