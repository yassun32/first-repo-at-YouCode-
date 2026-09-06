const prompt = require("prompt-sync")();
let etudiant = {
        nome : "YASSINE",
        prenome : "BLAILA",
        tab : [14, 16, 13, 20, 17, 15],
}

console.log(`etudiant : ${etudiant.nome} ${etudiant.prenome}`)
console.log(`Liste des notes : ${etudiant.tab.join(", ")}`)
