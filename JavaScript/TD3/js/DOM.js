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

/*fonction qui insère 1 item à la liste*/
function ajoutItem(obj){
    let listElement=document.getElementById('ex2');
    let taille =listElement.getElementsByTagName("li").length;
    listElement.innerHTML += "<li>click bouton : "+taille+"</li>" ;
}

function clearList(obj){
    let listElement=document.getElementById('ex2');
    //Suppresion des items 1 par 1
    let li =listElement.getElementsByTagName("li");
    for (let i=1;i<li.length;i++){listElement.lastElementChild.remove()}

    //Suppresion de la liste entière
    //let taille =listElement.getElementsByTagName("li").length;
    //for (let i=1;i<taille;i++){listElement.lastElementChild.remove()}
}

function incrInputValue(obj){
    let count=document.getElementById('ex4i');
    count.value +=1;
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

    let ex3=document.querySelector("#ex3");
    ex3.addEventListener("click", (event) => {
        //test 4
        clearList(event);
    });

    let ex4=document.querySelector("#ex4b");
    ex3.addEventListener("click", (event) => {
        //test 5
        incrInputValue(event);
    });

});