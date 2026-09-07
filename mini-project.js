const prompt = require("prompt-sync")();
let apprenants = {
    prenome : yassine,
    note : 18,
}
function Ajouter(apprenants) {
    apprenants.note = prompt("enter le note : ")
    apprenants.prenome = prompt("enter le prenome : ")
    return apprenants
}
function affichage(object) {
  for (const key in object) {
    console.log(`${key} : ${object[key]}`);
  }
}
function recherche(object) {
const prenome = prompt("enter le prenome : ") 
for (const key of object) {
    if (prenome === object.prenome) {
        
    }
}   
}
Ajouter(apprenants)
affichage(apprenants)
