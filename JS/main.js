'use strict';

document.addEventListener('DOMContentLoaded',()=>{
    displayMenu();
})

function displayMenu(){
    const ham = document.querySelector('.ham')
    const enlaces = document.querySelector('.enlaces-menu')
    const barras = document.querySelectorAll('.ham span')

       ham.addEventListener('click',()=>{
           enlaces.classList.toggle('activado');
       
            for(const barra of barras){
            barra.classList.toggle('animado')
        }
   }) 
}