import { grilles, piege } from "/js/grilles.js"; // import Tableau principal grille et de la variable piege
import { lignePourPlacerPersonnage, colonnePourPlacerPersonnage } from "/js/personnage.js"; // import de la variable lignePourPlacerPersonnage et colonnePourPlacerPersonnage
import { diminutionEnergie } from "/js/manipulationBarreEnergie.js"; // import de la fonction diminutionEnergie et de la variable energieEnlevee

export let afficherScore = document.getElementById("afficher-score"); // recuperation de la balise qui va afficher le score
const gameOverScore =document.querySelector("#game-over p"); // Où est afficher le score lors de game over
const gameOverSorti =document.querySelector("#game-over h2"); // Où est afficher le message lors de game over ou sortie de jeu
export let score = 0 // valeur de score
const nombrePointPiege = 50 // valeur à soustraire s'il y a piege
const nombrePointTresor = 1000 // valeur à ajouter s'il y a tresor
const nombrePointTuileVide = 10 // valeur à soustraire s'il y a tuile vide
afficherScore.innerHTML = score // initialisation de l'affichage de score à 0
let energieEnlevee = 1 // l'energie que perd le joueur s'il tombe sur un piege
  
// Fonction qui verifie si la tuile a un piege, un tresor ou est vide
export function verificationTuile() {

   if (grilles[lignePourPlacerPersonnage][colonnePourPlacerPersonnage] === piege) { // S'il y a piege
        // Appel de la fonction qui va diminuer l'energie si la tuile est un piege
        diminutionEnergie(energieEnlevee)

        if (afficherScore.innerHTML < 0 || afficherScore.innerHTML < nombrePointPiege ) {
            score = 0
            afficherScore.innerHTML = score
            gameOverScore.innerHTML = "Score : " + score
            gameOverScore.classList.remove("colorerMessageExit")
            gameOverScore.classList.add("decolorer")
        }else {
            score -= nombrePointPiege
            afficherScore.innerHTML = score
            gameOverScore.innerHTML = "Score : " + score
            gameOverScore.classList.remove("colorerMessageExit")
            gameOverScore.classList.add("decolorer")
        }
    }else if(grilles[lignePourPlacerPersonnage][colonnePourPlacerPersonnage] === " "){ // Si c'est vide
        if (afficherScore.innerHTML <= 0 ) {
            return
        }else {
            score -= nombrePointTuileVide
            afficherScore.innerHTML = score
            gameOverScore.innerHTML = "Score : " + score
            gameOverScore.classList.remove("colorerMessageExit")
            gameOverScore.classList.add("decolorer")
        }
            
    }else { // S'il y a tresor
        score += nombrePointTresor
        afficherScore.innerHTML = score
        gameOverScore.innerHTML = "Score : " + score
        gameOverScore.classList.remove("colorerMessageExit")
        gameOverScore.classList.add("decolorer")
    }
    gameOverSorti.innerHTML = "Game Over" // Message par defaut
}

// Fonction qui reinitialise le score
export function reinitialiserLeScore() {
    score = 0
    afficherScore.innerHTML = score
}

// Fonction pour sortir du jeu
export function reinitialiserLeScoreSortie() {
    gameOverSorti.innerHTML = "OUPS !!!!!!"
    gameOverScore.innerHTML ="Vous avez quitter le jeu"
    gameOverScore.classList.add("colorerMessageExit")
}