const prompt = require("prompt-sync")();
const nb = prompt("enter le nombre d'éléments du tableau : ");
let x = 0
let i = 0
while (i < nb) {
    x += parseInt(prompt("enter le "+ (i + 1) +" nombre d'éléments du tableau : "))
    //x += x;
    i++;
}
console.log("la somme des nombres est "+ x)