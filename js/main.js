import { manipulationTableau, afficherTableau } from "./grilles.js"; // import fonction manipulationTableau et afficherTableau
import { placerPersonnageAuCentre } from "./personnage.js"; // import de la fonction placerPersonnageAuCentre
import "./manipulationBouton.js"; // import pour la manipulation des boutons
import { reinitialiserLeJeu } from "./reinitialiserJeu.js"; // import de la fonction reinitialiserLeJeu
import  "./sortirDuJeu.js"; // import de la fonction gameOver

// Initialisation de la grille
manipulationTableau();

// Placement du personnage au centre
placerPersonnageAuCentre();

// Affichage initial de la grille
afficherTableau();

// Reinitialiser le jeu
reinitialiserLeJeu()

