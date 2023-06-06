const pantallaDeCarga = document.getElementById("pantallaDeCarga")
function displayPantallaDeCarga(value){
    if (value){
        pantallaDeCarga.classList.remove("none")
        return
    }
    pantallaDeCarga.classList.add("none")
}
