const prompt = require("prompt-sync")();
const nb = prompt("enter le nombre d'éléments du tableau : ");
let tab = [];
let i = 0;
while (i < nb) {
    tab[i] = parseInt(prompt("entre le " + (i + 1) + " element de tableau : "))
    i++
}
let min = tab[0]
let j = 1;
while (j < nb) {
    if (min > tab[j]) {
        min = tab[j]
    }
    j++;
}
console.log(min)