const prompt = require("prompt-sync")();
let chaine =  prompt("enter une chaîne de caractères : ")
console.log("la chaîne résultante sera : " + chaine.replaceAll(" ",""))