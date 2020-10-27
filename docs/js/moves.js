var btnJugar = document.getElementById('btnJugar'),
    imgA = document.getElementsByClassName('imgCar'),
    imgD = document.getElementsByClassName('imgReverso'),
    card1 = document.getElementById('card1'),
    card2 = document.getElementById('card2'),
    card3 = document.getElementById('card3'),
    card4 = document.getElementById('card4'),
    card5 = document.getElementById('card5'),
    rev1 = document.getElementById('rev1'),
    rev2 = document.getElementById('rev2'),
    rev3 = document.getElementById('rev3'),
    rev4 = document.getElementById('rev4'),
    rev5 = document.getElementById('rev5');


// boton jugar hace aparecer a las cartas
function cartasAparecen(){
    for(let i=0; i<5; i++){
        imgA[i].style.display='flex';
    }
}
// --------------------------------------------------------


function imgDelante(){
    card1.style.display='none';
    rev1.style.display='flex';    
}
function imgAtras(){
    card1.style.display='flex';
    rev1.style.display='none';
}
btnJugar.addEventListener('click',cartasAparecen,true)
card1.addEventListener('click',imgDelante,true)
rev1.addEventListener('click',imgAtras,true)


