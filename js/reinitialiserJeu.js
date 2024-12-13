import { manipulationTableau, afficherTableau } from "/js/grilles.js"; // import de la fonction manipulationTableau et afficherTableau
import { placerPersonnageAuCentre } from "/js/personnage.js"; // import de la fonction placerPersonnageAuCentre
import { etatBouton } from "/js/etatBouton.js"; // import de la fonction etatBouton
import { gameOver } from "/js/alerteGameOver.js"; // import de la fonction gameOver
import { reinitialiserLeScore} from "/js/unPiegeOuUnTresor.js"; // import de la fonction reinitialiserLeScore
import { reinitialiserBarreEnergie} from "/js/manipulationBarreEnergie.js"; // import de la fonction reinitialiserBarreEnergie

let boutonReessayer = document.getElementById("bouton-reessayer"); // selection du bouton reessayer

// Fonction qui reinitialise le jeu
export function reinitialiserLeJeu() {
    manipulationTableau() // appel de la fonction qui reinitialise le tableau
    placerPersonnageAuCentre() // appel de la fonction qui place le joueur au centre
    afficherTableau() // appel de la fonction qui affiche le tableau
    etatBouton(" ") // appel de la fonction pour remettre l'etat des bouton par defaut
    gameOver(" ") // appel de la fonction qui affiche l'alert game over
    reinitialiserLeScore() // appel de la fonction qui initialise le score
    reinitialiserBarreEnergie() // appel de la fonction qui initialise la barre d'energie
}

boutonReessayer.addEventListener("click", reinitialiserLeJeu)
