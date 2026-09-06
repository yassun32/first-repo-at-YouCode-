const prompt = require("prompt-sync")();
let object = {
        x : "",
        y : "",
}
object.x = prompt("Enter la valeur de x : ");
object.y = prompt("Enter la valeur de y : ");
console.log(`la valeur de point x est ${object.x} et la valeur de point y est ${object.y}`);
