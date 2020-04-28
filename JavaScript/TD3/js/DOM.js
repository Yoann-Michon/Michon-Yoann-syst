'use strict';

//1
/*fonction logClick qui affiche
dans la console "click"*/
function logClick(obj){
    console.log("click");
}

/* modifie l’apparence du bouton "#ex1" à chaque click*/
function updateButtonClass(obj){
    let boutton = obj.target;
    if (boutton.className === 'c1'){
        boutton.className = 'c2';
    } else  if (boutton.className === 'c2'){
                boutton.className = 'c3';
            } else {
                boutton.className = 'c1';
            }
}

//fonction principale
window.addEventListener("load",()=>{

    let ex1=document.querySelector("#ex1");
    ex1.addEventListener("click", (event) => {
        //test 1
        logClick(event);
        //test 2
        updateButtonClass(event);
    });

});