const prompt = require("prompt-sync")();
const nb = prompt("enter le nombre d'éléments du tableau : ");
let tab = []
let i = 0
let j = 0
while (i < nb) {
    tab[i] = prompt("enter le "+ (i + 1) +" nombre d'éléments du tableau : ")
    i++;
}
while (j < nb) {
    console.log(tab[j]);
    j++;
}