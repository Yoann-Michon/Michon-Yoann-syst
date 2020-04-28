'use strict';

//1
/*fonction logClick qui affiche
dans la console "click"*/
function logClick(obj){
    console.log("click");
}

/* modifie l’apparence du bouton "#ex1" à chaque click*/
function updateButtonClass(obj){
    let bouton = obj.target;
    if (bouton.className === 'c1'){
        bouton.className = 'c2';
    } else  if (bouton.className === 'c2'){
                bouton.className = 'c3';
            } else {
                bouton.className = 'c1';
            }
}

function ajoutItem(obj){
    let listElement=document.getElementById('ex2');
    let taille =listElement.getElementsByTagName("li").length;
    listElement.innerHTML += "<li>click bouton : "+taille+"</li>" ;
}

//fonction principale
window.addEventListener("load",()=>{

    let ex1=document.querySelector("#ex1");
    ex1.addEventListener("click", (event) => {
        //test 1
        logClick(event);
        //test 2
        updateButtonClass(event);
        //test 3
        ajoutItem(event);
    });

});