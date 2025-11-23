import { tailleVeritcale, tailleHorizontale, grilles } from "./grilles.js"; // import des variables tailleVeritcale, tailleHorizontale et du tableau principal grilles
import { verificationTuile } from "./unPiegeOuUnTresor.js"; // import de la fonction verificationTuile

// les variable
export let lignePourPlacerPersonnage = 0;
export let colonnePourPlacerPersonnage = 0;

// Fonction qui place le personnage au centre
export function placerPersonnageAuCentre() {
    lignePourPlacerPersonnage = Math.floor(tailleVeritcale / 2);
    colonnePourPlacerPersonnage = Math.floor(tailleHorizontale / 2);

    grilles[lignePourPlacerPersonnage][colonnePourPlacerPersonnage] = '/assets/personnage.png';
}


/**
 * Fonction qui déplace le personnage
 * @param {string} orienterPersonnage quel bouton est clique(gauche, haut, bas, droit)
 */
export function orienterPersonnage(orienterPersonnage) {
    // Retirer l'ancien emplacement du personnage
    grilles[lignePourPlacerPersonnage][colonnePourPlacerPersonnage] = " ";

    switch (orienterPersonnage) {
        case "gauche":
            if(colonnePourPlacerPersonnage > 0) {
                colonnePourPlacerPersonnage--; // Déplacer vers la gauche gauche
                // Appel de la fonction qui verifie si c'est un piege ou un tresor
                verificationTuile()  
            }
            break;
        case "haut":
            if(lignePourPlacerPersonnage > 0) {
                lignePourPlacerPersonnage--; // Déplacer vers la gauche gauche
                // Appel de la fonction qui verifie si c'est un piege ou un tresor
                verificationTuile()  
            }
            break;
        case "bas":
            if(lignePourPlacerPersonnage < tailleVeritcale - 1) {
                lignePourPlacerPersonnage++; // Déplacer vers la gauche gauche
                // Appel de la fonction qui verifie si c'est un piege ou un tresor
                verificationTuile()  
            }
            break;
        case "droite":
            if(colonnePourPlacerPersonnage < tailleHorizontale - 1) {
                colonnePourPlacerPersonnage++; // Déplacer vers la gauche gauche
                // Appel de la fonction qui verifie si c'est un piege ou un tresor
                verificationTuile()  
            }
            break;
    
        default: 
            break;
    }
    // Ajouter le personnage à la nouvelle position
    grilles[lignePourPlacerPersonnage][colonnePourPlacerPersonnage] = '/assets/personnage.png';
}
