let sala
let leftKey = document.getElementById("left")
let rightKey = document.getElementById("right")
//DETECCION DE CLICKS
leftKey.addEventListener("click",function(){handlerClickKeys("left")})
rightKey.addEventListener("click",function(){handlerClickKeys("right")})