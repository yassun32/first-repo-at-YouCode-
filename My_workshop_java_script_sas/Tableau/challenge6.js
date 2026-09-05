const prompt = require("prompt-sync")();
const nb = prompt("enter le nombre d'éléments du tableau : ");
const mu = prompt("enter  le facteur de multiplication : ");
let tab = [];
let i = 0;
while (i < nb) {
    tab[i] = parseInt(prompt("entre le " + (i + 1) + " element de tableau : "))
    i++
}
let j = 0;
while (j < nb) {
   tab[j] = mu * tab[j]
   console.log(tab[j])
   j++
}
