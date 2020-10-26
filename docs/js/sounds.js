//sonido popUP
// let modal = document.getElementById("sound")
let audioEtiqueta = document.querySelector("audio")

function mouseDown(){
    document.getElementById("sound")
    audioEtiqueta.setAttribute("src", "sounds/pop.mp3")
    audioEtiqueta.play()
}

//sonido popClose
// let close = document-getElementById("soundCls")
let audioEtiquet = document.querySelector("audio")

function closePopUp(){
    document.getElementById("soundCls")
    audioEtiquet.setAttribute("src", "sounds/sonidoclick.mp3")
    audioEtiquet.play()
    console.log(audioEtiquet)
}