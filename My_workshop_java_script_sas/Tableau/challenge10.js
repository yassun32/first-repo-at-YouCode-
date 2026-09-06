const prompt = require("prompt-sync")();
const nb = prompt("enter le nombre d'éléments du tableau : ");
let tab = [];
let i = 0
while (i < nb) 
{
    tab[i] = parseInt(prompt("entre le " + (i + 1) + " element de tableau : "))
    i++
}
const eli = parseInt(prompt ("l'élément à rechercher : "));
i = 0;
while (i < nb)
{
	if(tab[i] === eli)
	{
		console.log("l'élément est présent ");
		return 0
	}
	i++;
}
console.log("l'élément ne pas  présent ");
return 0

