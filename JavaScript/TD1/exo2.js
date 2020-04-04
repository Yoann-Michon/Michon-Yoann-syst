'use strict';
//2.1
/*
function creerMultiplicateur(n){
    return (x) => x* n;
}*/

//2.2
/*function creerSequence(init,step){
    init -= step;
    return () => init += step
}
let sequence = creerSequence(0, 2);
console.log("Séquence init 0, step 2 :");
console.log(sequence());
console.log(sequence());*/

//2.3
/*fonction qui permet de parcourir la suite de fibonacci*/
function fibonacci(a,b) {
    let tab=[a,b];
    return ()=>{
        tab.push(tab[tab.length-2]+tab[tab.length-1]);
        return tab;
    }
}
/*-----TEST-----*/
//let tab = fibonacci(0,1);
//console.log("initialisation de la liste à 0 et 1");
//console.log("ajoute 1 a la liste : "+tab());

//2.4
/* si elle reçoit 2 paramètres, elle retourne n*x,
* si elle reçoit 1 seul paramètre, elle retourne n*n */
function creerMultiplicateur2(n,x){
    var x = (typeof x !== 'undefined') ? x : n;
    return n * x;
}
/*-----TEST-----*/
//console.log("doit afficher 10 : "+creerMultiplicateur2(5,2));
//console.log("doit afficher 20 : "+creerMultiplicateur2(10,2));
//console.log("doit afficher 5 : "+creerMultiplicateur2(-5,-1));
//console.log("doit afficher 25 : "+creerMultiplicateur2(5));

//2.5
/* si elle reçoit 2 paramètres, elle retourne x à la puissance n
* si elle reçoit 1 seul paramètre n, elle retourne une fonction qui met à la
puissance n */
function power2(n, x){
    let res;
    /*si x n'est pas défini alors x=n*/
    x = (typeof x !== 'undefined') ? x : n;
    if (x === 0){return 1;}
    res = n*power2(n,x-1);
    return res;
}
/*-----TEST-----*/
//console.log("5 Puissance 2 doit retourner 25 : " + power2(5,2));
//console.log("4 Puissance 4 doit retourner 256 : " + power2(4,4));

//2.6
function formatter(n){
    n=n-1;
    return (message)=>{n++;
                    return n +" : "+message};
}
/*-----TEST-----*/
//let format = formatter(10) ; // on numérote les messages à partir de 10
// format( 'le ciel est blanc') ; // retourne "10 : le ciel est blanc"
// format('la neige est bleue') ; // retourne "11: la neige est bleue"


//2.7
/* La fonction write() qui écrit le message
qu'elle reçoit sur la console.*/
function write(msg){
    return msg;
}
/*-----TEST-----*/
//console.log("message : " + write('plouf'));
//console.log("yopla : " + write('yopla'));

/* La fonction writeAlert() qui écrit le message
qu'elle reçoit en utilisant alert()*/
function writeAlert(msg){
    alert(msg);
}
/*-----TEST-----*/
//console.log("plouf : " + writeAlert('plouf'));
//console.log("yopla : " + writeAlert('yopla'));

//2.8
function logger(formatter,write){
    return (message)=>{return write(formatter(message))};
}
/*-----TEST-----*/
//let log = logger(formatter(5), write);
//log('poussin'); //affiche "5:poussin"
//log('piou'); //affiche "6:piou"
//log('piou'); //affiche "7:piou"