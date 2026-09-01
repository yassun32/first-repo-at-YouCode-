const prompt = require("prompt-sync")();
const c = prompt("enter la tempurateur en c : ");
const k = parseFloat(c) + 273.15;
console.log(`la temeratuer en Kelvin est ${k}`);