let modal = document.getElementById('modal');
let lblmodal = document.getElementById('lblmodal');
let btnCerrar = document.getElementById('btnCerrar');

window.addEventListener('click', function(e){
    if(e.target ==  modal){
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
    }
})


window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target ==  lblmodal){
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
    }else if(e.target == btnCerrar){
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
    }
})