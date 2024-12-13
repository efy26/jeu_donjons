let containerAfficherJeu = document.getElementById("container-principal"); // Le conteneur où est affiche la grille
const pourcentagePiege = 90; // Pourcentage de pièges
export const tailleVeritcale = 15; // Nombre de lignes
export const tailleHorizontale = 25; // Nombre de colonnes
export  let piege = "assets/danger.png" // url image piege
export  let tresor = "assets/coin.png" // url image tresor
/**
 * @type {grilles[]} Tableau principal
 */
export let grilles = [];

// Fonction pour remplir la grille avec des pièges et des trésors
export function manipulationTableau() {
    for (let ligneGrille = 0; ligneGrille < tailleVeritcale; ligneGrille++) {
        grilles[ligneGrille] = []; // Initialisation des sous-tableaux
    
        for (let colonneGrille = 0; colonneGrille < tailleHorizontale; colonneGrille++) {
            let valeurRandom = Math.floor(Math.random() * 100) + 1;
            grilles[ligneGrille]        
            valeurRandom < pourcentagePiege ? grilles[ligneGrille].push(piege) /*Piege*/ 
            : grilles[ligneGrille].push(tresor); /* tresor*/
        }
    }
}

// Fonction pour afficher la grille 
export function afficherTableau() {
    containerAfficherJeu.innerHTML = " "; // Réinitialise l'affichage

    for (let i = 0; i < grilles.length; i++) {
        let divInsersionImg = document.createElement("div");

        for (let j = 0; j < grilles[i].length; j++) {
            let img = document.createElement("img");
            img.src = grilles[i][j];
            divInsersionImg.appendChild(img);
        }
        containerAfficherJeu.appendChild(divInsersionImg);
    }
}
