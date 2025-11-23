import { etatBouton } from "./etatBouton.js"; // import de la fonction etatBouton
import { gameOver } from "./alerteGameOver.js"; // import de la fonction gameOver

export const barreEnergie = document.getElementById("barreEnergie"); // recuperation de la balise de l'energie
const bordureBarreEnergie = document.getElementById("bordure-barreEnergie"); // recuperation de la balise de bordur de l'energie
export let niveauEnergie = 40 // niveau energie par defaut
export let energieCourrante = niveauEnergie // l'energie actuelle
bordureBarreEnergie.innerHTML = `${energieCourrante}/40` // affichage  du niveau d'energie à la barre d'energie par defaut
const energieMoyenne = (50/100)*40; // Valeur energie si elle atteint le 50 %
const energiePresqueFinie = (10/100)*40 // Valeur energie si elle atteint le 10 %


// Fonction qui initialise la barre d'energie à la ratio d'energie
export function  initialisationDeBarEnergie(){
    const ratioDeEnergie = (energieCourrante / niveauEnergie) * niveauEnergie
    barreEnergie.style = `width: ${ratioDeEnergie}%;`
    barreEnergie.classList.add("energiPleine")
    bordureBarreEnergie.innerHTML = `${ratioDeEnergie}/40` 

    // condition sur la barre d'energie  
    if (ratioDeEnergie === energieMoyenne) {// condition si la barre d'energie est moyenne
        barreEnergie.classList.remove("energiPleine")
        barreEnergie.classList.add("energiMoyenne")

    }else if (ratioDeEnergie === energiePresqueFinie) { // condition si la barre d'energie est presque finie
        barreEnergie.classList.remove("energiMoyenne")
        barreEnergie.classList.add("energiePresqueFinie")

    }else if (ratioDeEnergie === 0) { // condition si la barre d'energie est egale à 0
        gameOver("true")
        etatBouton("game over")
        barreEnergie.classList.remove("energiePresqueFinie")
        barreEnergie.classList.add("energiPleine")
    }
}
/**
 * Fonction qui diminue l'energie
 * @param { number } valeurAEnlever diminuer de -1 si on tombe sur un piege
 */
export  function diminutionEnergie(valeurAEnlever) {
    energieCourrante = Math.max(0, energieCourrante - valeurAEnlever)
    initialisationDeBarEnergie()
}

// Fonction qui reinitialise la barre d'energie comme au debut
export function reinitialiserBarreEnergie() {
    niveauEnergie = 40
    energieCourrante = niveauEnergie
    bordureBarreEnergie.innerHTML = `${energieCourrante}/40`
    initialisationDeBarEnergie()
}