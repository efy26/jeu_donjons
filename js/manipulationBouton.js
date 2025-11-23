import { orienterPersonnage } from "./personnage.js"; // import de la fonction orienterPersonnage
import { afficherTableau } from "./grilles.js"; // import de la fonction afficherTableau
import { boutonGauche, boutonHaut, boutonBas, boutonDroit } from "./etatBouton.js"; // import des boutons de direction

// Fonction pour manipuler le bouton gauche
export function manipulationButonGauche() {
    orienterPersonnage("gauche");
    afficherTableau(); // Mettre à jour l'affichage après le déplacement
}

// Fonction pour manipuler le bouton de haut
export function manipulationButonHaut() {
    orienterPersonnage("haut");
    afficherTableau(); // Mettre à jour l'affichage après le déplacement
}

// Fonction pour manipuler le bouton de bas
export function manipulationButonBas() {
    orienterPersonnage("bas");
    afficherTableau(); // Mettre à jour l'affichage après le déplacement
}

// Fonction pour manipuler le bouton droit
export function manipulationButonDroit() {
    orienterPersonnage("droite");
    afficherTableau(); // Mettre à jour l'affichage après le déplacement
}
// Ajout de l'écouteur sur le bouton après chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
    if (boutonGauche) { boutonGauche.addEventListener("click", manipulationButonGauche); } 
    if (boutonHaut) { boutonHaut.addEventListener("click", manipulationButonHaut); }
    if (boutonBas) { boutonBas.addEventListener("click", manipulationButonBas); }
    if (boutonDroit) { boutonDroit.addEventListener("click", manipulationButonDroit); }
});
