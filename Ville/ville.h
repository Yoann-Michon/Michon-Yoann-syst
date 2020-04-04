//
// Created by yoann on 01/04/2020.
//

#ifndef VILLE_VILLE_H
#define VILLE_VILLE_H

/* Déclaration de constante */
#define TAILLE_NOM 80

/* Déclaration d'une structure de type Etudiant */
typedef struct V {
    char nom[TAILLE_NOM];
    int codep;
    struct V *suc;
} Ville;
typedef struct V *Liste;


Liste liste_teteinserer(Liste l, int e, char nom[TAILLE_NOM]);

Liste liste_queueinserer(Liste l, int e, char nom[TAILLE_NOM]);

Liste ouverture_fichier();

void liste_afficher(Liste l);

Liste liste_liberer(Liste l);

Liste liste_tetesupprimer(Liste l);

#endif //VILLE_VILLE_H
