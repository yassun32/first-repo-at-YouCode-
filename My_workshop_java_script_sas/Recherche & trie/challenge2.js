const tab = [8, 3, 5, 1, 9, 2]
console.log("Avant le tri : " + tab.join(", "));
let min = tab[0];
for (let i = 0; i < tab.length; i++) {
    j = i
   while(j < tab.length){
    if (min < tab[j])
        min = tab[j]
    j++
   }
   tab[i] = min

}
console.log("Après le tri : " + tab.join(", "));