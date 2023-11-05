/*
FONCTIONS - PRÉPA 3 : Une première calculatrice
1. Déclarez la fonction calculer()
   pour qu'elle gère les 4 opérations mathématiques de base :
   addition, soustraction, multiplication et division.
   Conseil : utilisez un switch pour basculer entre les différentes opérations.
2. Utilisez ensuite votre fonction pour calculer
   - 4 + 6 (qui doit évidemment donner 10)
   - 4 - 6 (qui doit évidemment donner -2)
   - 2 * 0 (qui doit évidemment donner 0)
   - 12 / 0 (qui doit donner Infinity)
Aide : votre fonction s'exécute avec le pattern suivant : calculer(nb1, "+", nb2)
*/

// Déclaration de la fonction calculer
const nbr1 = parseInt(prompt('Entrez un premier nombre'));
const operateur = prompt('Veuillez entrer l\'operateur de votre calcule ; +, -, * ou /');
const nbr2 = parseInt(prompt('Entrez un deuxième nombre'));
function calculer () {
    switch (operateur){
        case '+' :
            console.log(`${nbr1} + ${nbr2} = ${nbr1 + nbr2}`);
        break;
        case '-' :
            console.log(`${nbr1} - ${nbr2} = ${nbr1 - nbr2}`);
        break;
        case '*' :
            console.log(`${nbr1} * ${nbr2} = ${nbr1 * nbr2}`);
        break;
        case '/' :
            console.log(`${nbr1} / ${nbr2} = ${nbr1 / nbr2}`);
        break;
    }
}
// Utilisation de la fonction calculer
console.log(calculer());
