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
}/*-------Test-------*/
//console.log("de 1 à 5 : "+ range(1,5));
//console.log("de 1 à 5 : "+ range(5,1));
//console.log("de 1 à 20 : "+ range(1,20));

//1.2
function sum(tab){
    let somme=0;
    for (let i=0;i<tab.length;i++){
        somme+=tab[i];
    }
    return somme;
}/*-------Test-------*/
//console.log("tab[1,2,3] = 6 : "+ sum([1,2,3]));

function sum2(tab){
    let somme=0;
    tab.forEach(tab=>somme+=tab);
    return somme;
}/*-------Test-------*/
//console.log("tab[1,2,3] = 6 : "+ sum2([1,2,3]));

function sum3(tab){
    let somme=(accumulator, currentValue) => accumulator + currentValue;
    return tab.reduce(somme);
}/*-------Test-------*/
//console.log("tab[1,2,3] = 6 : "+ sum3([1,2,3]));

//1.3
function moyenne(tab){
    let moy=0;
    let somme=0;
    for (let i=0;i<tab.length;i++){
        somme+=tab[i];
        moy=somme/tab.length;
    }
    return moy;
}/*-------Test-------*/
//console.log("moyenne de 2: "+moyenne([1,2,3]));
//console.log("moyenne de 2: "+moyenne([11,22,33]));

function moyenne2(tab){
    let somme=0;
    tab.forEach(tab=>somme+=tab);
    let moy=somme/tab.length;
    return moy;
}/*-------Test-------*/
//console.log("moyenne de 2: "+moyenne2([1,2,3]));
//console.log("moyenne de 2: "+moyenne2([11,22,33]));

function moyenne3(tab){
    let moy;
    let somme=(accumulator, currentValue) => accumulator + currentValue;
    moy=tab.reduce(somme)/tab.length;
    return moy;
}/*-------Test-------*/
//console.log("moyenne de 2: "+moyenne3([1,2,3]));
//console.log("moyenne de 2: "+moyenne3([11,22,33]));

//1.4
function pattern(t, str){
    let res=[];
    t.forEach((a)=>{if (a.includes(str))
                    {
                      res.push(a.toUpperCase());
                    }});
    return res;
}/*-------Test-------*/
//let tab = ['fermeture', 'voiture', 'ture', 'nomenclature', 'coco'];
//console.log(pattern(tab,'ture'));

//1.5
function pattern2(t, testFnct, transFnct){
    let res=[];
    t.forEach((a)=>{if (testFnct(a))
    {
        res.push(transFnct(a));
    }});
    return res;
}//à voir

//1.6
function pattern3(t, str){
    return t.filter(t=>t.includes(str)).map(t=>t.toUpperCase());
}/*-------Test-------*/
//let tab = ['fermeture', 'voiture', 'ture', 'nomenclature', 'coco'];
//console.log(pattern3(tab,'ture'));

//1.7
function url(t){
    let tab=[];
    for (let i=0; i<t.length;i++){
        tab.push("http://www.cata.log/products/"+t[i])
    }
    return tab;
}/*-------Test-------*/
//console.log("renvoie l'url de chaque produit : "+url([1,2,3,4,5]));

//1.8
function url2(t){
    let html="<div class=cata><ul>";
    for (let i=0; i<t.length;i++){
        let ref=("http://www.cata.log/products/"+t[i]);
        html +="\n <li><a href='"+ref+"'>"+t[i]+"</a><li>";
    }
    html+="\n</ul> </div>";
    return html;
}/*-------Test-------*/
//console.log(url2(['downers1','uppers2','trips3','aphrodisiques4','dope5']));