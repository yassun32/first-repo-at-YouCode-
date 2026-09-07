const tab = [8, 3, 5, 1, 9, 2]
console.log("Avant le tri : " + tab.join(", "));
let swap;
for (let i = 0;  i < tab.length - 1; i++) {
    for (let j = 0; j < tab.length - i  - 1; j++) {
        if (tab[j] < tab[j + 1]){
            swap = tab[j]
            tab[j] = tab[j + 1]
            tab[j + 1] = swap
        }        
    }
    
}
console.log("Après le tri : " + tab.join(", "));