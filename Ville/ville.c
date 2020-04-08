#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ville.h"


/* Ajout d'un élément en tête de liste */
Liste liste_teteinserer(Liste l, int e, char nom[TAILLE_NOM])
{
    Liste p;

    p = (Liste) malloc(sizeof(Ville));
    if (p == NULL) {
        printf("Allocation impossible...\n");
        exit(1);
    }
    p->codep = e;
    p->suc = l;
    strcpy(p->nom,nom);

    return (p);
}

/* Affichage de la liste */
void liste_afficher(Liste l, int e){
    while (l != NULL) {
        printf("%d\n",l->codep);
        if (l->codep==e){
            printf("%s\n",l->nom);
        }
        l=l->suc;
    }
    printf("\n");
}



// Libère de la mémoire
Liste liste_liberer(Liste l){
    while (l){
        l=liste_tetesupprimer(l);
    }
    return l;
}

Liste liste_queueinserer(Liste l, int e, char nom[TAILLE_NOM]){
    if (!l)return liste_teteinserer(l,e,nom);

    Liste p;
    Liste tete=l;
    p = (Liste) malloc(sizeof(Ville));

    if (p == NULL){
        printf("Allocation impossible...\n");
        exit(1);
    }

    p->codep = e;
    p->suc = NULL;
    strcpy(p->nom,nom);

    while (l->suc) {
        l=l->suc;/*permet d'avancer dans la liste*/
    }/*si l->suc ==NULL alors*/
    l->suc=p;

    return tete;
}

/* Suppression d'un élément en tête de liste */
Liste liste_tetesupprimer(Liste l)
{
    Liste p = NULL;

    if (!l) {
        p = l->suc;
        free(l);
    }

    return (p) ;
}

Liste ouverture_fichier(){
    Liste l = NULL;
    char nom[TAILLE_NOM];
    int codep;
    FILE *f;

    /*Ouverture du ficher.txt*/
    f=fopen("ville.txt", "r");

    /*on vérifie qu'il ne soit pas vide*/
    if (f== NULL)
    {
        printf("Le fichier est vide");
        exit(1);
    }

    while (fscanf(f,"%s %d",nom, &codep) != EOF){
       l=liste_queueinserer(l,codep,nom);
    }
    fclose(f);
    return l;

}

