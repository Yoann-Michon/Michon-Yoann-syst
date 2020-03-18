#include <time.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>

/**
 *  Variable permettant de stocke
 *  le nbr de point du joueur
 */
int score;

void sortie(){
    printf("\n votre score est de : %d points \n",score);
}

void multiplication(){
    int res,n,i;
    /**initialisation de nbr aléatoires*/
    srand(time(NULL));
    n=rand()%10;
    i=rand()%10;
    printf(" %d x %d = ",n,i);
    scanf("%d",&res);

    /**test du résultat*/
    if (res == n * i){
        score++;
        multiplication();
    }
    printf("Le bon resultat est : %d\n",n*i);
    sortie();
    exit(0);
}


int main() {
    printf(" Multiplications\n ");
    multiplication();
}

