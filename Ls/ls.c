#include <stdio.h>
#include <stdlib.h>
#include <dirent.h>
#include <sys/stat.h>
#include <unistd.h>
#include <string.h>

int main(int arg, char **argv){

    DIR* rep = opendir(argv[1]);
    struct dirent* fichier;

    //si il y a moins de 2 arguments
    if (arg < 2) {
        printf ("Erreur sur la commande\n");
        exit(1);
        return 1;
    }

    while((fichier = readdir(rep)) != NULL){
            printf("'%s'\n",fichier->d_name);
    }

    closedir(rep);
    return 0;
}