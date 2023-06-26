//  la concaténation 

var annee = 2017;
var futur = 3;
var calcul = annee + futur;
console.log(calcul);
document.write(calcul + " <br>  ");



var mois = "7";
var calcul2 = annee + mois ;
console.log(calcul2);
document.write(calcul2 + "<br>");


var DebutPhrase = "Aujourd'hui ";
var NbStagiaires = 12;
var SuitesPhrase = " stagiaire";
var FinPhrase = "sont présents."; //pas d'espace 
// nous souhaitons afficher la phrase en un seul morceau avec la concaténation 
document.write(DebutPhrase + NbStagiaires + SuitesPhrase + "   " + FinPhrase)
