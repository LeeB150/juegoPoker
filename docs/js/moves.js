var imgA = document.getElementById('adelante'),
    imgD = document.getElementById('atras');

function imgDelante(){
    imgA.style.display='none';
    imgD.style.display='flex';

}
function imgAtras(){
    imgA.style.display='flex';
    imgD.style.display='none';

}

imgA.addEventListener('click',imgDelante,true)
imgD.addEventListener('click',imgAtras,true)
