const prompt = require("prompt-sync")();
var n = parseInt(prompt("enter n : "));
var result;
function fibonacci(n) {
    if (n > 2)
    {
        return (fibonacci(n - 2) + fibonacci(n - 1));
}
    else if (n == 1 || n == 2)
    {
        return 1;
    }
    else
    return 0;
}
console.log(fibonacci(n));