/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile


function isBissextile (annee) {
    if (((annee % 4 === 0) && !(annee % 100 === 0)) || annee % 400 === 0){
        return true;
    }else
        return false;
}

// Fonction pour vérifier si une date est valide
function isValid (jour, mois, annee) {
    if (mois < 1 || mois > 12){
        return false;
    }
    switch (mois){
        case 2:
            if (isBissextile(annee)){
                return jour >= 1 && jour <= 29;
            }else {
                return jour >= 1 && jour <= 28;
            }
        break;
        case 4:
        case 6:
        case 9:
        case 11:
            return jour >= 1 && jour <= 30;
        break;
        default:
            return jour >= 1 && jour <= 31;
    }
    return true;
}

// Demander à l'utilisateur de saisir une date
const jour = parseInt(prompt('Entrez un jour (en chiffre) :'));
const mois = parseInt(prompt('Entrez un mois (en chiffre) :'));
const annee = parseInt(prompt('Entrez un annee :'));

// Utilisation de la fonction isValid pour vérifier la date
if (isValid(jour, mois, annee)){
    console.log('La date est bonne.');
}else {
    console.log('La date n\'est pas bonne.');
}

