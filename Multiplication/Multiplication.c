#include <time.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <signal.h>
#include <errno.h>
/**
 *  Variable permettant de stocke
 *  le nbr de point du joueur
 */
int score;

void sortie(int sig){
    printf("\n Votre score est de : %d points \n",score);
}

void times_up(int sig){
    puts("\n Temps écoulé !");
    raise(SIGINT);
}

int catch_signal(int sig, void (*handler)(int)){
    struct sigaction action;

    action.sa_handler = handler;
    sigemptyset(&action.sa_mask);
    action.sa_flags = 0;
    return sigaction (sig, action, NULL);
}

void multiplication(){
    catch_signal(SIGALRM, times_up);
    catch_signal(SIGINT, sortie);
    int res,n,i;
    /**initialisation de nbr aléatoires*/
    srand(time(NULL));
    n=rand()%11;
    i=rand()%11;
    alarm(5);
    printf(" %d x %d = ",n,i);
    scanf("%d",&res);

    /**test du résultat*/
    if (res == n * i){
        score++;
        multiplication();
    }
    printf("Le bon resultat est : %d\n",n*i);
    sortie(res);
    exit(0);
}


int main() {
    printf(" Multiplications\n ");
    multiplication();
}

