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
let etudiant={numero: 1,
                nom: "LAMOUR",
                prenom: "Jean",
                dateNaiss: new Date(1998,1,5, 11,33,0),
                mail: "jean.lamour@yopmail.com",
                notes: [],

//2.3
/*Calcul de l'age*/
age()   {let auj= new Date();
            let age=auj.getFullYear() - this.dateNaiss.getFullYear();
            if (auj.getMonth()===this.dateNaiss.getMonth())
                {if (auj.getDay>this.dateNaiss.getDay()) age-=1;}
            else if(auj.getMonth()===this.dateNaiss.getMonth()){age-=1;}
            return age;
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
ajoutNote(mat,n){ this.notes.push({matiere : mat, note:n})},

//2.5
moyenne(){
    let somme=0;
    this.notes.forEach(n=>somme+=n.note);
    return somme/this.notes.length;
        }
};/*----------Test----------*/
/*console.log("\n Etudiant numero : " + etudiant.numero +"\n nom : " + etudiant.nom +
    "\n prenom : " + etudiant.prenom + "\n dateNaiss : " + etudiant.dateNaiss +
    "\n mail : " + etudiant.mail +"\n notes : " + etudiant.notes);*/
//console.log("age : " + etudiant.age());
//console.log("Information : \n" + etudiant.informationsEtud());
// etudiant.ajoutNote('Philo', 14);
// etudiant.ajoutNote('Francais', 9);
//console.log("moyenne : "+etudiant.moyenne());



//2.6
/*constructeur etudiant*/
function etudiants(numero,nom,prenom,dateNaiss,mail){
    this.numero=numero;
    this.nom=nom;
    this.prenom=prenom;
    this.dateNaiss=dateNaiss;
    this.mail=mail;
    this.notes=[];
}/*----------Test----------*/
/*let etu = new etudiants(2, "JEAN", "LAMOUR", "10/05/1956", "jean.dilong@yopmail.com")
console.log("etudiant numero : " + etu.numero + "\n nom : " + etu.nom +
        "\n prenom : " + etu.prenom + "\n dateNaiss : " + etu.dateNaiss +
        "\n mail : " + etu.mail + "\n notes : " + etu.notes);*/

etudiants.prototype.age=function () {
    let auj= new Date();
    let age=auj.getFullYear() - this.dateNaiss.getFullYear();
    if (auj.getMonth()===this.dateNaiss.getMonth())
        {if (auj.getDay>this.dateNaiss.getDay()) age-=1;}
    else if(auj.getMonth()===this.dateNaiss.getMonth()){age-=1;}
    return age;
};/*----------Test----------*/

etudiants.prototype.info=function(){
    let jour=this.dateNaiss.getDay();
    let mois=this.dateNaiss.getMonth();
    let annee=this.dateNaiss.getFullYear();
    let dateNaissance=jour+"/"+mois+"/"+annee;
    return this.nom.toUpperCase() +"\n"+this.prenom+"\n"+dateNaissance;
};/*----------Test----------*/

etudiants.prototype.note=function(mat,n){ this.notes.push({matiere : mat, note:n})};
/*----------Test----------*/

etudiants.prototype.moyenne=function(){
    let somme=0;
    this.notes.forEach(n=>somme+=n.notes);
    return somme/this.notes.length;
};/*----------Test----------*/

//2.7
function annniversaire(t,num){
    let tab=[];
    for (let i=0;i<=t.length;i++){
        if (t.dateNaiss.getMonth()===num){
            tab.push(t[i]);
        }
    }
    return tab;
}/*----------Test----------*/

//2.8
function triAge(t,n){
    let tab=[];
    for (let i=0;i<=t.length;i++){
        if (t.age>n){
            tab.push(t[i]);
        }
    }
    return tab;
}/*----------Test----------*/

//2.9
function grpEtud(nom,nformation,tab,annee){
    this.nomgpe=nom;
    this.formation=nformation;
    this.liste=tab;
    this.annee=annee;
}

//2.10
grpEtud.prototype.ajoutEtud=function(nomEtud,nomgrp){
    if (nomgrp===this.nomgpe){
        this.liste.push(nomEtud);
    }
    return this.liste;
};

grpEtud.prototype.compter=function(){
    return this.liste.length;
};

grpEtud.prototype.moyGen=function () {
    for(let i=0;i<=this.liste.length;i++){
        return this.liste[i].moyenne;
    }
};

//2.11
grpEtud.prototype.bonus=function(n,mat){
    for (let i=0;i<=this.liste.length;i++){
        if (this.liste[i].dateNaiss.getMonth()===n){

        }
    }
};