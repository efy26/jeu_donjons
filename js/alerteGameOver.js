// variables
const containerGameOver = document.getElementById("container-game-over") // selection popup gameover


/**
 * fonction qui verifie l'etat du jeu
 * @param {string} etat si la barre d'energie est egale a 0
 */
export function gameOver(etat) {
  switch (etat) {
    case "true":
      containerGameOver.classList.remove("desactiver")
      containerGameOver.classList.add("activer")
      break;
  
    default:
      containerGameOver.classList.remove("activer")
      containerGameOver.classList.add("desactiver")
      break;
  }
}

