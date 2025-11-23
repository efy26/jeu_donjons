import { etatBouton } from "./etatBouton.js"; // import de la fonction etatBouton
import { gameOver } from "./alerteGameOver.js"; // import de la fonction gameOver
import { reinitialiserLeScoreSortie} from "./unPiegeOuUnTresor.js"; // import de la fonction reinitialiserLeScoreSortie

// les variables
let boutonSortir = document.getElementById("bouton-sortir"); // selection bouton sortir

// Fonction qui execute la sortie du jeu
export function sortirDuJeu() {
    etatBouton("game over")
    gameOver("true")
    reinitialiserLeScoreSortie()
}
boutonSortir.addEventListener("click", sortirDuJeu)