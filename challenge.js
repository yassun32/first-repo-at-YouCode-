const tab = [10, 11, 9, 12, 0, 6, 16]

function note(tab) {
    let moyenne = 0
    let somme = 0
    let ntab = []
    for (let i = 0; i < tab.length; i++) {
        somme += tab[i]
    }
    moyenne = somme / tab.length
    let i = -1;
    for (let j = 0; j < tab.length; j++) {
        if (tab[j] >= moyenne) {
            i++
            ntab[i] = tab[j]
        }
    }

    console.log(ntab.join(", "))
    console.log(moyenne)
    return
}
ntab = note(tab)
