const prompt = require("prompt-sync")();
const nb = prompt("enter le nombre d'éléments du tableau : ");
let tab = [];
let i = 0
while (i < nb) 
{
    tab[i] = parseInt(prompt("entre le " + (i + 1) + " element de tableau : "))
    i++
}
i = 0;
let result = 0;
let moyenne = 0;
while (i < nb)
{
        result += tab[i]
	i++;
}
moyenne = result / (nb)
console.log(moyenne)
