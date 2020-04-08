'use strict';

//2.1
function elements(t){
    let sum=(acc, cur) => acc + cur;
    let somme2 =t.reduce(sum);
    let moy=somme2/t.length;

    var object={nbrElem: t.length,
        somme: somme2,
        moyenne: moy};
    return object;
}/*-----TEST-----*/
//let tab=elements([1,2,3])
//console.log(tab)
//console.log(tab.nbrElem)
//console.log(tab.somme)
//console.log(tab.moyenne)

//2.2
let etudiant={numero: "",
                nom: "",
                prenom: "",
                dateNaiss: new Date(),
                mail: "",
                notes: []};