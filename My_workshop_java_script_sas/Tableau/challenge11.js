const prompt = require("prompt-sync")();
const nb = prompt("enter le nombre d'éléments du tableau : ");
let tab = [];
let i = 0
while (i < nb) 
{
    tab[i] = parseInt(prompt("entre le " + (i + 1) + " element de tableau : "))
    i++
}
const val = parseInt(prompt ("entre la valeur à remplacer : "));
const nval = parseInt(prompt ("entre la nouvelle valeur : "));
i = 0;
while (i < nb)
{
        if(tab[i] === val)
        {
                tab[i] = nval
		for (let j = 0; j < nb ; j++)
			console.log(tab[j])
		return 0

        }
        i++;
}
console.log("l'élément ne pas  présent ");
return 0
