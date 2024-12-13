import { manipulationTableau, afficherTableau } from "/js/grilles.js"; // import fonction manipulationTableau et afficherTableau
import { placerPersonnageAuCentre } from "/js/personnage.js"; // import de la fonction placerPersonnageAuCentre
import "/js/manipulationBouton.js"; // import pour la manipulation des boutons
import { reinitialiserLeJeu } from "/js/reinitialiserJeu.js"; // import de la fonction reinitialiserLeJeu
import  "/js/sortirDuJeu.js"; // import de la fonction gameOver

// Initialisation de la grille
manipulationTableau();

// Placement du personnage au centre
placerPersonnageAuCentre();

// Affichage initial de la grille
afficherTableau();

// Reinitialiser le jeu
reinitialiserLeJeu()

