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

 //Generar 5 números random sin opción a reincidir  ---  INICIO
function cartasAparecen(){
    let large=5;
    let arrayCard = [];
    let min = 1;
    let max = 54;
    min = Math.ceil(min);
    max = Math.floor(max);
    while (arrayCard.length<large){
        let numRamdom = Math.floor(Math.random() * (1+ max - min) + min)  
        let existe = false; 
        for (let i = 0; i < arrayCard.length; i++) {
            if(arrayCard[i] == numRamdom){    
                existe = true;
                break;        
            }
        }         
        if(!existe){
            arrayCard.push(numRamdom);
        }
    }
 //Generar 5 números random sin opción a reincidir  ---  FIN

    for(let j=0; j<5; j++){
        imgA[j].setAttribute('src' , 'images/deck/'+arrayCard[j]+'.png');
        imgA[j].style.display='inline';
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


