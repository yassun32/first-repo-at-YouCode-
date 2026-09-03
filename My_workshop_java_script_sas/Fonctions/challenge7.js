const prompt = require("prompt-sync")();
var n = prompt ("enter le nombre : ");
function number(n){
    while (n >= 0) {
        console.log(n);
        n--;
    }
    return 0;
}
number(n);