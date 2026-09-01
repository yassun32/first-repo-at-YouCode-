const prompt = require("prompt-sync")();
const a = prompt("enter la valeur de a : ");
const b = prompt("enter la valeur de b : ");
const c = prompt("enter la valeur de c : ");
const mg = (parseFloat(a) * parseFloat(b) * parseFloat(c)) ^ (1/3);
console.log("la moyenne géométrique de trois nombres est ",mg);