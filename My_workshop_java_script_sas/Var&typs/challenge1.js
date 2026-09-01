const scanf = require("prompt-sync")();
const nom = scanf("entere voter nom : ");
const prenom = scanf("entere voter prdenom : ");
const age = scanf("entere voter age : ");
const sex = scanf("entere voter sex : ");
const mail = scanf("entere voter adresse e-mail : ");
console.log(`vos informations personnelles est ${nom} ${prenom} age est ${age} et vous sex est ${sex} ansi le mail est ${mail}`);