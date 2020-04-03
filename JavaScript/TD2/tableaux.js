'use strict';
//1.1
function range(a, b){
    let tab=[];
    let min=Math.min(a,b);
    let max=Math.max(a,b);
    for (let i=min;i<=max;i++){
        tab.push(i);
    }
    return tab;
}
console.log("de 1 à 5 : "+ range(1,5));
console.log("de 1 à 5 : "+ range(5,1));

//1.2
function sum(tab){
    let somme=0;
    for (let i=0;i<tab.length;i++){
        somme+=tab[i];
    }
    return somme;
}
console.log("tab[1,2,3] = 6 : "+ sum([1,2,3]));

function sum2(tab){
    let somme=0;
    tab.forEach(somme+=tab[i]);
    return somme;
}
console.log("tab[1,2,3] = 6 : "+ sum2([1,2,3]));

function sum3(tab){
    let somme=(accumulator, currentValue) => accumulator + currentValue;
    return tab.reduce(somme);
}
console.log("tab[1,2,3] = 6 : "+ sum3([1,2,3]));