const botonAbrirTienda = document.getElementById("tiendaB")
const tiendaHud = document.getElementById("tienda")
botonAbrirTienda.addEventListener("click",function(e){
    transicionar(finDeRonda,"desaparecer")
    transicionar(tiendaHud,"aparecer")
})