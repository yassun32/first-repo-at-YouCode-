const prompt = require("prompt-sync")();
const c = prompt("enter la température en Celsius /   ");
if (c < 0 )
    console.log("l'état de l'eau est solide");
else if (c >= 0 || c < 100)
    console.log("l'état de l'eau est Liquide");
else console.log("l'état de l'eau est Gaz");