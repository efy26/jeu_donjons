// Les variables des boutons
export let boutonGauche = document.getElementById("bouton-gauche");  
export let boutonHaut = document.getElementById("bouton-haut");  
export let boutonBas = document.getElementById("bouton-bas");  
export let boutonDroit = document.getElementById("bouton-droit");  


/**
 * Fonction qui verifie l'etat des boutons
 * @param {string} etat si on est sorti du jeu / ou si on est egameover
 */
export function etatBouton(etat) {
    switch (etat) {
      case "game over":
        boutonGauche.setAttribute("disabled", "disabled");
        boutonHaut.setAttribute("disabled", "disabled");
        boutonBas.setAttribute("disabled", "disabled");
        boutonDroit.setAttribute("disabled", "disabled");
        break;
    
      default:
        boutonGauche.removeAttribute("disabled");
        boutonHaut.removeAttribute("disabled");
        boutonBas.removeAttribute("disabled");
        boutonDroit.removeAttribute("disabled");
        break;
    }
}
