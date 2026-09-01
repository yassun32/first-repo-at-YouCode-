const prompt = require("prompt-sync")();
const anne = prompt ("Veuillez entere lanne ");
console.log("taper le nombre ce qui signifie la convertir de l'année ");
console.log("1-Mois");
console.log("2-Jours");
console.log("3-Heures");
console.log("4-Minutes");
console.log("5-Secondes");
const choix = prompt("enter le choix de convert l'anne : ");
let result ;
if (choix == 1)
    result = anne * 12;
else if (choix == 2)
	result = anne * 365;
else if (choix == 3)
	result = 365 * 24;
else if (choix == 4)
	result = 365 * 24 * 60
else if (choix == 5)
	result = 365 * 24 * 60 * 60
else (console.log("le nombre ne pas valide"))
console.log("l'anne sera " + result);
