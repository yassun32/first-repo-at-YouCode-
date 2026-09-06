const prompt = require("prompt-sync")();
let personne = {
	nome : "",
	prenome : "",
	age : ""
}
personne.nome = prompt("enter le nome de personne : ")
personne.prenome = prompt("enter le prenome de personne : ")
personne.age = parseInt(prompt("enter l'age de personne : "))
console.log(personne.nome)
console.log(personne.prenome)
console.log(personne.age)
