#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ville.h"

int main() {

    int i;
    Liste l;
    l = ouverture_fichier();
    for (i=0 ; i<=49100 ; i++)  {
        liste_afficher(l, i);
    }
    l = liste_liberer(l);
}

