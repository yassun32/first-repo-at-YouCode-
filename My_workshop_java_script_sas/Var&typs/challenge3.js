const prompt = require("prompt-sync")();
const km = prompt("enter la distance en km : ");
console.log(`LA DISTANCE EN KM EST ${km}`);
const Yards = parseFloat(km) * 1093.61;
console.log(`LA DISTANCE EN YARD EST ${Yards}`);