let audioEtiqueta = document.querySelector("audio")

//sonido popUP
function mouseDown(){
    audioEtiqueta.setAttribute("src", "sounds/pop.mp3")
    audioEtiqueta.play()
}

//sonido popClose
function closePopUp(){
    audioEtiqueta.setAttribute("src", "sounds/sonidoclick.mp3")
    audioEtiqueta.play()
}