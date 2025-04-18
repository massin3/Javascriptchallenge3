//---------------------------------------------------Loops----------------------------------------------------
/*

for (i=1; i<=10; i++){
    console.log(i);
}

*/

//--------------------------------------------------------------

/*
somme = 0;
for (i=1; i<=20; i++){
    if (i%2==0){
        console.log(i);
        somme += i;
    }
}
console.log(somme);
*/

//--------------------------------------------------------------

/*
let number = prompt("Entrez un nombre pour afficher sa table de multiplication :");

number = parseInt(number); // Convertit la chaîne de caractères en nombre

if (!isNaN(number)) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
} else {
    console.log("Veuillez entrer un nombre valide.");
}
*/

//--------------------------------------------------------------

/*
let phrase = prompt("Entrez une phrase :");
let voyelles = "aeiouyAEIOUY";
let compteur = 0;

for (let i = 0; i < phrase.length; i++) {
    if (voyelles.includes(phrase[i])) {
        compteur++;
    }
}

console.log(`Il y a ${compteur} voyelle(s) dans : "${phrase}"`);
*/


//---------------------------------------------------Arrays----------------------------------------------------

/*
let prenoms = ["Jean", "Paul", "Jacques", "Marie", "Pierre"];

for (i=0; i<prenoms.length; i++){
    console.log(prenoms[i]);
}
*/

//--------------------------------------------------------------

/*
let notes = [10, 12, 15, 18, 20, 8, 14, 16, 19, 11];
let somme = 0;

for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
}

let moyenne = somme / notes.length;

console.log(`La moyenne est : ${moyenne}`);
*/


//--------------------------------------------------------------

/*
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20];
let impairs = [];

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 !== 0) {
        impairs.push(nombres[i]);
    }
}

console.log("Nombres impairs :", impairs);
*/

//--------------------------------------------------------------

/*
function TrouverMax(tableau) {
    let max = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > max) {
            max = tableau[i];
        }
    }

    return max;
}

let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Le plus grand nombre est :", TrouverMax(nombres));
*/

