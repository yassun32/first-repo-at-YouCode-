const prompt = require("prompt-sync")();
const nb = prompt("enter le nombre d'éléments du tableau : ");
let tab = [];
let i = 0;
while (i < nb) {
    tab[i] = parseInt(prompt("entre le " + (i + 1) + " element de tableau : "))
    i++
}
let max = tab[0]
let j = 1;
while (j < nb) {
    if (max < tab[j]) {
        max = tab[j]
    }
    j++;
}
console.log(max)