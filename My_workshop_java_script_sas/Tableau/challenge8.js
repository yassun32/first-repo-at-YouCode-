const prompt = require("prompt-sync")();
const nb = prompt("enter le nombre d'éléments du tableau : ");
let tab = [];
let i = 0;
while (i < nb) {
    tab[i] = parseInt(prompt("entre le " + (i + 1) + " element de tableau : "))
    i++
}
i = 0;
let dest = [];
while(i < nb)
{
	dest[i] = tab[i]
	i++
}
i = 0;
while(i < nb)
{
	console.log(dest[i])
	i++
}
