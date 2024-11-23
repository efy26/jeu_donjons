const tailleVeritcale = 15; // Nombre de lignes
const tailleHorizontale = 25; // Nombre de colonnes
const pourcentagePiege = 90; // Nombre de piège (%)

let grilles = []; // Tableau principal

// Fonction qui permet de remplir le tableau grilles
function manipulationTableau() {
        for (let ligneGrille = 0; ligneGrille < tailleVeritcale; ligneGrille++){
            grilles[ligneGrille] = []; // Initialisation des sous-tableaux
        
            for (let coloneGrille = 0; coloneGrille < tailleHorizontale; coloneGrille++) {
                let valueAleatoire = Math.floor(Math.random() * 100)+1; // Génère une valeur aléatoire entre 0 et 100
            
                if (valueAleatoire < pourcentagePiege) {
                    grilles[ligneGrille].push("_P_"); // "P" pour Piège
                } else {
                    grilles[ligneGrille].push("_T_"); // "T" pour Trésor
                }
            }
        }
}
manipulationTableau()


// Fonction qui permet d'afficher le tableau
export function afficherTablauGrille()
{
    let ol = document.createElement("ol");

    for (let i = 0; i < grilles.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${grilles[i]}`; // Affiche la ligne sous forme lisible
        ol.appendChild(li);
        console.log(grilles[i]);
        
    }
    
    document.querySelector("div").appendChild(ol);
}

