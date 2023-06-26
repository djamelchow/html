// syntaxe de base

// commantaire sur une ligne

/*ici je fait un commantaire sur plusieur lignes */

// --1: déclarer une variable en js 
// var prenom;

// --2 affecter une valuer a une variable 
// prenom= "djamel";

//  var prenom = "djamel";

// --3 une unstruction se termine toujours par  un peoint viggule , il est possible décrire plusieurninstruction sur une seul ligne 

// instruction1;
// instrucion_2; inst_3;



alert("super tu est arriver sur mon site sal susseur")

// --5 afficher dans la console 
// concole.log(prenom);
// ici on affiche la valeur du prenom
// concole.log(prenom);

// --6 demander a l'utilusateur une valeur 
// prompt ("question : on est quel jou?")

var jour=prompt("question : on est quelle jour?");
console.log(jour);

// --7 js est sensible a la casse
// mavariable en camel case : maVariable et snake case : ma_variable 

// --8 une variable ne peut pas commancer par un chiffre , ne doit pas contenier que des caractéres alphanumérique.

// les types de variable 

// --1 chaine de caractéres
var vacances = "2017";
var destination = "australie";

//--2un nombre entier (int)


var annee = 2017;

//--3 un nombre décimal (float)
var nombre = 5.32;

// --4 un booléen (vrai ou faut)
var unBooleen = false;

// --5 les constantes
/* la déclaration de const permet de créer une constante accessible uniquement en lecture. contrairement a une variable sa valeur ne peut plus etre modifier par réaffectation plus bas dans le code*/
// par convention les constantes sont en majuscule 

const PAYS = "france";   // chaine de caractére 
const AN = 2023; // nombre

console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);
console.log(unBooleen);
console.log(typeof unBoolean);

// on peut convertir une variable de type Number sn String et aussi String en number avce les fonction native de JS 

// la fonction parseInt () renvoie un entier a partir d'une chaine de caractéres 

var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre);

// String to nember

unChiffre = parseInt(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);


// je r"affecte une valeure
unChiffre = "12.22";
console.log(unChiffre);
console.log(typeof unChiffre);

// string  to float
unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);

// number to string
var nb_en_lettres = 258;
unChiffre = parseInt(unChiffre);
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);

var nb_en_lettres =  nb_en_lettres.toString();
unChiffre = parseInt(unChiffre);
console.log(nb_en_lettres);
console.log(typeof nb_en_lettres);
