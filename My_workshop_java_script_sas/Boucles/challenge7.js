const prompt = require("prompt-sync")();
let mod;
let nb = Number(prompt ("Veuillez enter le nombre : "));
while (nb != 0)
    {
        mod = nb % 10;
        nb = parseInt(nb / 10);
        process.stdout.write(mod.toString());
    }