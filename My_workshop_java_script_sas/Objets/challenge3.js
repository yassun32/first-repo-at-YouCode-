const prompt = require("prompt-sync")();
let object = {
	longeur : "",
	largeur : "",
}
object.longeur = prompt("enter la longeur de carre : ")
object.largeur = prompt("enter la largeur de carre : ")
const airec = (a, b) => a * b
console.log(airec(object.longeur, object.largeur));
