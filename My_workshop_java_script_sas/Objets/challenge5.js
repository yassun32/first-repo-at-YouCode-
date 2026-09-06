const prompt = require("prompt-sync")();
let livre = {
        titre : "",
        auteur : "",
        annee : "",
}
function reobject(livre)
{
	livre.titre = prompt("Entre le titre de livre : ")
	livre.auteur = prompt("Entre l'auteur de livre : ")
	livre.annee = prompt("Entre l'anne de publication d'livre : ")
	return livre
}
reobject(livre)
console.log("le titre : " + livre.titre)
console.log("l'auteur : " + livre.auteur)
console.log("l'anne : " + livre.annee)
