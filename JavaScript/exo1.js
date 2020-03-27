//1
'use strict';

function min(a, b){
    return(a<b)? a : b;
}

function max(a, b){
    if (a>b)
        return a;
    else
        return b;
}


console.log(" Minimum entre 2 et 8 : " + min(2, 8));
console.log(" Minimum entre 8 et 2 : " + min(8, 2));
console.log(" Maximum entre 2 et 8 : " + max(2, 8));
console.log(" Maximum entre 8 et 2 : " + max(8, 2));

//2
function division(){
    let i;
    for(i=1; i<101;i++){
        console.log(i);
        if(i% 5 == 0){
            console.log("yoooo");
        }
        if(i == 73){
            console.log("Biinnngooo");
        }
    }
}

function puissance(x, n){
    if (n == 0){
        return 1;
    }else{
        return x = x*puissance(x,n-1);
    }
}
console.log("5 Puissance 2 : " + puissance(5,2));