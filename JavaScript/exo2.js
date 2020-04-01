'use strict';
//2.1
function creerMultiplicateur(n){
    return (x) => x* n;
}

//2.2
function creerSequence(init,step){
    init -= step;
    return () => init += step
}
let sequence = creerSequence(0, 2);
console.log("Séquence init 0, step 2 :");
console.log(sequence());
console.log(sequence());

//2.3
function fibonacci(nbr) {
    if(nbr < 2){
        return nbr;
    }
    return fibonacci(nbr - 1) + fibonacci(nbr - 2);
}
console.log(fibonacci(8));

//2.4
