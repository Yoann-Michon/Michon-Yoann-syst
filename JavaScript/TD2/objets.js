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
/** console.log("\n Etudiant numero : " + etudiant.numero +"\n nom : " + etudiant.nom +
    "\n prenom : " + etudiant.prenom + "\n dateNaiss : " + etudiant.dateNaiss +
    "\n mail : " + etudiant.mail +"\n notes : " + etudiant.notes);
    console.log("age : " + etudiant.age());
    console.log("Information : \n" + etudiant.informationsEtud());
    etudiant.ajoutNote('Philo', 14);
    etudiant.ajoutNote('Francais', 9);
    console.log("moyenne : "+etudiant.moyenne());   */



//2.6
/*constructeur etudiant*/
function etudiants(numero,nom,prenom,dateNaiss,mail){
    /* rappel :
     *  split() permet de recuperer
     *  les elements d'une chaine de
     *  caractere sous forme de tableau
    */
    let sep=dateNaiss.split("/");

    this.numero=numero;
    this.nom=nom;
    this.prenom=prenom;
    this.dateNaiss=new Date(sep[2],sep[1],sep[0]);
    this.mail=mail;
    this.notes=[];
}/*----------Test----------*/
/** let etu = new etudiants(2, "JEAN", "LAMOUR", "01/05/1956", "jean.dilong@yopmail.com")
 * let etu2 = new etudiants(3, "JEAN", "Charles", "16/11/1957", "jean.savaitrien@yopmail.com");
 * let etu3 = new etudiants(1, "FLEURY", "Michon", "12/01/1953", "fleury@yopmail.com");
    console.log("etudiant numero : " + etu.numero + "\n nom : " + etu.nom +
        "\n prenom : " + etu.prenom + "\n dateNaiss : " + etu.dateNaiss +
        "\n mail : " + etu.mail + "\n notes : " + etu.notes);   */

etudiants.prototype.age=function () {
    let auj= new Date();

    let jour=this.dateNaiss.getDay();
    let mois=this.dateNaiss.getMonth();
    let annee=this.dateNaiss.getFullYear();

    let nJour=auj.getDay();
    let nMois=auj.getMonth()+1;
    let nAnnee=auj.getFullYear();
    let age= nAnnee - annee;

    if (nMois===mois)
        {if (nJour>jour) age-=1;}
    else if(nMois===mois){age-=1;}
    return age;
};/*----------Test----------*/
//console.log("age : " + etu.age());


etudiants.prototype.info=function(){
    let jour=this.dateNaiss.getDay();
    let mois=this.dateNaiss.getMonth();
    let annee=this.dateNaiss.getFullYear();
    let dateNaissance=jour+"/"+mois+"/"+annee;
    return this.nom.toUpperCase() +"\n"+this.prenom+"\n"+dateNaissance;
};/*----------Test----------*/
//console.log("info : \n" + etu.info());

etudiants.prototype.note=function(mat,n){ this.notes.push({matiere : mat, note:n})};
/*----------Test----------*/
/** etu.note('Java', 14);
    etu.note('Anglais', 9);
    console.log("matiere : "+ etu.notes[0].matiere +"\n note : "+etu.notes[0].note);
    console.log("matiere : "+ etu.notes[1].matiere +"\n note : "+etu.notes[1].note); */


etudiants.prototype.moyenne=function(){
    let somme=0;
    for (let i=0; i<this.notes.length;i++){
        somme+=this.notes[i].note;
    }
    return somme/this.notes.length;
}/*----------Test----------*/
//  console.log("moyenne : "+etu.moyenne());

//2.7
function anniversaire(t,num){
    let tab=[];
    t.forEach(etu=>{if (etu.dateNaiss.getMonth()+1===num)tab.push(etu.prenom);})
    return tab;
}/*----------Test----------*/
/*  console.log("mois : "+ anniversaire([etu,etu2,etu3],11)); */

//2.8
function triAge(t,n){
    let tab=[];
    for (let i=0;i<=t.length;i++){
        if (t[i].age>n){
            tab.push(t[i]);
        }
    }
    return tab;
}/*----------Test----------*/
// console.log(triAge([etu,etu2,etu3],25));

//2.9
function grpEtud(nom,nformation,tab,annee){
    this.nomgpe=nom;
    this.formation=nformation;
    this.liste=tab;
    this.annee=annee;
}/*----------Test----------*/
/** let grp = new grpEtud("Lol", "Video", [etu, etu2, etu3], 2015);
    console.log("nomgpe : " + grp.nomgpe + "\n formation : " + grp.formation +
 "\n liste : " + grp.liste + "\n année : " + grp.annee); */

//2.10
grpEtud.prototype.ajoutEtud=function(etu){
    this.liste.push(etu);
};/*----------Test----------*/
/** let etu4 = new etudiants(4, "Landjet", "Marainou", "20/05/1965", "landjet.marainou@yopmail.com");
 *  let grp = new grpEtud("Lol", "Video", [etu, etu2, etu3], 2015);
 *  console.log(grp.ajoutEtud(etu4.nom));
 */

grpEtud.prototype.compter=function(){
    return this.liste.length;
};/*----------Test----------*/
//  console.log(grp.compter());

grpEtud.prototype.moyGen=function () {
    for(let i=0;i<=this.liste.length;i++){
        return this.liste[i].moyenne;
    }
};/*----------Test----------*/


