const tab = [8, 3, 5, 1, 9, 2]
console.log("Avant le tri : " + tab.join(", "));
let swap;
for (let i = 0; i < tab.length; i++) {
    let j = i;
    while (j < tab.length) {
        if(tab[i] > tab[j + 1]) {
            swap = tab[i]
            tab[i] = tab[j + 1]
            tab[j + 1] = swap
        }
        j++;
    }
}
console.log("Après le tri : " + tab.join(", "));