// let modal = document.querySelector(".lbl-modal")
// let audioEtiqueta = document.querySelector("audio")

// modal.addEventListener("click", () => {
//     audioEtiqueta.setAttribute("src", "../sounds/pop.mp3")
//     audioEtiqueta.play()
//     console.log(`Reproduciendo: ${audioEtiqueta.src}`)
// })

let modal = document.getElementById("sound")
let audioEtiqueta = document.querySelector("audio")


function mouseDown(){
    document.getElementById("sound")
    audioEtiqueta.setAttribute("src", "../sounds/pop.mp3")
    audioEtiqueta.play()
}