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
function creerMultiplicateur2(n,x){
    if (x === null)
        return (k) => k* n;
    else
        return n * x;
}
console.log(creerMultiplicateur2(5,2));

//2.5
function power2(n, x){
    let res;
    if (x === null){
        return(power2(n-1)*n);
    }
    if (x === 0){return 1;}
    res = n*power2(n,x-1);
    return res;
}
console.log("5 Puissance 2 : " + power2(5,2));

//2.6
function formatter(){
    
}