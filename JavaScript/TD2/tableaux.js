'use strict';

function range(a,b){
    let tab=[];
    let min=Math.min(a,b);
    let max=Math.max(a,b);
    for (let i=min;i<=max;i++){
        tab.push(i);
    }return tab;
}
console.log("de 1 à 5 : "+range(1,5));
console.log("de 1 à 5 : "+range(5,1));