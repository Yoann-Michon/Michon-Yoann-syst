#include <stdio.h>
#include <stdlib.h>
#include <dirent.h>
#include <sys/stat.h>
#include <unistd.h>
#include <string.h>

int main(int arg, char **argv){

    DIR* rep;
    struct dirent *fichier;

    //si il y a moins de 2 arguments
    if (arg <2) {
        rep = opendir(".");
    }

    if (rep == NULL){
        printf ("Répertoire vide\n");
        exit(1);
    }

    while((fichier = readdir(rep)) != NULL){
            printf("'%s'\n",fichier->d_name);
    }

    closedir(rep);
    return 0;
}