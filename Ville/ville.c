#include <stdio.h>
#include <stdlib.h>
#include "ville.h"

/* Initialisation d'une liste */
Liste liste_initialiser()
{
    return(NULL);
}

/* Test si une liste est vide */
int liste_vide(Liste l)
{
    return (l == NULL);
}

/* Ajout d'un élément en tête de liste */
Liste liste_teteinserer(Liste l, int e)
{
    Liste p;

    p = (Liste) malloc(sizeof(Ville));
    if (p == NULL) {
        printf("Allocation impossible...\n");
        exit(1);
    }
    p->codep = e;
    p->suc = l;

    return (p);
}

/* Affichage de liste */
void liste_afficher(Liste l){
    while (l != NULL) {
        printf("%d\n",l->codep);
        l=l->suc;
    }
    printf("\n");
}



// Libère de la mémoire
/*Liste liste_liberer(Liste l){
    while (l){
        l=liste_tetesupprimer(l);
    }
    return l;
}*/

Liste liste_queueinserer(Liste l, int e){
    Liste p;
    Liste tete=l;
    p = (Liste) malloc(sizeof(Ville));

    if (liste_vide(l))/*si l est vide*/
        return liste_teteinserer(l,e);

    if (p == NULL){
        printf("Allocation impossible...\n");
        exit(1);
    }

    p->codep = e;
    p->suc = NULL;

    while (l->suc) {/*tant que suc != NULL*/
        l=l->suc;/*permet d'avancer dans la liste*/
    }
    /*si l->suc ==NULL alors*/
    l->suc=p;
    return tete;
}

Liste fichier(){
    Liste l = NULL;
    char nom[TAILLE_NOM];
    int codep;

    /*Ouverture du ficher.txt*/
    FILE *f = fopen("ville.txt", "r");

    /*on vérifie qu'il ne soit pas vide*/
    if (f == NULL)
    {
        printf("Le fichier est vide");
    }

    while (fscanf(f,"%s %d",nom, &codep) != EOF){
       l=liste_queueinserer(l,codep);
    }
    fclose(f);
    return l;

}
