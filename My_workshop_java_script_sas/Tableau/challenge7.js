const prompt = require("prompt-sync")();
const nb = prompt("enter le nombre d'éléments du tableau : ");
let tab = [];
let i = 0;
while (i < nb) {
    tab[i] = parseInt(prompt("entre le " + (i + 1) + " element de tableau : "))
    i++
}
i = 0;
let min
let j
while (i < nb - 1) {
    j = i + 1
    while (j < nb ) {
        if (tab[i] > tab[j]) {
            min = tab[j]
            tab[j] = tab[i]
            tab[i] = min
        }
        j++
    }
    i++;
}
i = 0;
while (i < nb) {
    console.log(tab[i])
    i++
}
