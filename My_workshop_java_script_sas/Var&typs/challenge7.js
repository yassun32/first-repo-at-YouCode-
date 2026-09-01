const prompt = require("prompt-sync")();
const nb1 = prompt ("enter le 1er nombre : ");
const nb2 = prompt ("enter le 2eme nombre : ");
const nb3 = prompt ("enter le 3eme nombre : ");
let m = parseFloat(nb1) + parseFloat(nb2) + parseFloat(nb3);
const result = m / 3 ;
console.log("la moyenne pondérée de trois nombres est ",result);