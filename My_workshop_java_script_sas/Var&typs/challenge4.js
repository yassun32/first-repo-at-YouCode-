const prompt = require("prompt-sync")();
let v = prompt("enter la vitess en km/h : ");
v = parseFloat (v) / 3.6; 
console.log(`la vitess est ${v}m/s`);