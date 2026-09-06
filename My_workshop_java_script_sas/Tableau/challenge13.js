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
while (i < nb)
{
        if(tab[i] % 2 !== 0)
        {
                console.log(tab[i])
        }
        i++;
}
