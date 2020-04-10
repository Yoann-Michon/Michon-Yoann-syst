'use strict';

//2.1
function elements(t){
    let sum=(acc, cur) => acc + cur;
    let somme2 =t.reduce(sum);
    let moy=somme2/t.length;

    let object={nbrElem: t.length,
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
let etudiant={numero: "12",
                nom: "Jean",
                prenom: "Pierre",
                dateNaiss: new Date(1998,12,5),
                mail: "",
                notes: [],

//2.3
/*Calcul de l'age*/
age()   {let auj= new Date();
            let age=auj.getFullYear() - this.dateNaiss.getFullYear();
            if (auj.getMonth()===this.dateNaiss.getMonth())
                {if (auj.getDay>this.dateNaiss.getDay()) age-=1;}
            else if(auj.getMonth()===this.dateNaiss.getMonth()){age-=1;}
        },

/*retourne des informations sur l'étudiant*/
informationsEtud() {
                    let jour=this.dateNaiss.getDay();
                    let mois=this.dateNaiss.getMonth();
                    let annee=this.dateNaiss.getFullYear();
                    let dateNaissance=jour+"/"+mois+"/"+annee;
                    return this.nom.toUpperCase() +"\n"+this.prenom+"\n"+dateNaissance;
                    },
//2.4
/*ajoute une note avec le nom de la matière*/
note(mat,n){ this.notes.push({matiere : mat, note:n})},

//2.5
moyenne(){
    let somme=0;
    this.notes.forEach(n=>somme+=n.notes);
    return somme/this.notes.length;
        }
};