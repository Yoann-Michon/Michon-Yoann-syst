'use strict';
//2.1
function creerMultiplicateur(n){
    return (x) => x* n;
}

//2.2
function creerSequence(init,step){
    step=init;
    let i;
    for (i=0;i<5;i++){
        step;
    }
}

//2.3
function fibonacci(nbr) {
    if(nbr < 2){
        return nbr;
    }
    return fibonacci(nbr - 1) + fibonacci(nbr - 2);
}
console.log(fibonacci(8));