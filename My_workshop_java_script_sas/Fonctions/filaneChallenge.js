const prompt = require("prompt-sync")();
var n = prompt ("enter le nombre : ");
function parite(n)
{
    if (n % 2 == 0)
        return console.log("true");
    else return console.log("false");
}
parite(n);