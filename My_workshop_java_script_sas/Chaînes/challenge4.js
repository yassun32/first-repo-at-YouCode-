const pretext = "hel lo";
const sectext = "hel lo";
let i = 0;
while (pretext[i] && sectext[i]) {
    if (pretext[i] != sectext[i])
    {
        console.log("les deux chaine sont difference");
        return;
    }
    i++;
}
if (pretext[i] == sectext[i])
{
    console.log("les deux chaine sont egale");
    return;
}
else console.log("les deux chaine sont difference");