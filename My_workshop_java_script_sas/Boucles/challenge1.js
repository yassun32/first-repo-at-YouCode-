const prompt = require("prompt-sync")();
let n = prompt("enter n : ");
let result = 0;
for (let i = 1;  i <= n ; i++) {
    result  = result + i;
}
console.log(result);