// Écrivez une fonction qui prend un tableau d'entiers en entrée
// et retourne un tableau contenant les éléments du tableau d'entrée
// triés en ordre croissant et affiché dans la div 'result'.

function trierTableau(tableau) {
  // Votre code ici
}

function afficherResultat() {
  // Parcourez le tableau et affichez chaque élément dans la div 'Result'
  for (var i = 0; i < tableau.length; i++) {
    // Votre code ici
  }
}

// Créez un tableau vide avec 100 éléments
var tableau = new Array(100);
// Remplissez le tableau avec des nombres entiers aléatoires compris entre 1 et 9999
for (var i = 0; i < tableau.length; i++) {
  tableau[i] = Math.floor(Math.random() * 9999) + 1;
}
console.log(tableau);
