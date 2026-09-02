const prompt = require("prompt-sync")();
let n = prompt("enter n : ");
let result = 1;
let i = 0;
 while (i < n) {
    if(result % 2 == 1 )
    {
        console.log(result);
        i++;
    }
    result++;

    
}
 