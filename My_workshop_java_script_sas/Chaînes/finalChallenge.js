const prompt = require("prompt-sync")();
const chaine = prompt("enter une chaîne de caractères : ")
const mote = prompt("enter une sous-chaîne: ")
let i = 0;
while (chaine[i]) {
    let j = 0;
    while (mote[j]) {
        if (chaine[i + j] == mote[j]) {
            j++;
        }
        
    }
    if (mote[j] == undefined) {
            console.log("la sous-chaîne est trouvée")
            return
        }
    i++;
}
console.log("la sous-chaîne est non trouvée")