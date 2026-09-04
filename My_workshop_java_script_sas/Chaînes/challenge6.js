const prompt = require("prompt-sync")();
const chaine =  prompt("enter une chaîne de caractères : ")
const mote =  prompt("enter un caractère : ")
let i = 0;
let count = 0;
while (chaine[i]) {
    if (chaine[i] == mote)
        count++;
    i++;
}
console.log("le caractère apparaît dans la chaîne " + count + " fois")
