
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.



// chiedere eta e chilometri

// calcolare il prezzo del Biglietto

var eta = prompt("quanti anni hai?");
console.log("eta del passeggero " + eta);
var kilometri = prompt("quanti kilometri vuoi fare?");
console.log("kilometri da percorrere "+ kilometri);
var scontoMin = (biglietto * 100) / 20;
console.log(scontoMin);
var scontoMag = (biglietto * 100) / 40;
console.log(scontoMag);


if ((eta > 18) && (eta > 64)); {
  var biglietto = (kilometri * 0.21);
  console.log(biglietto);
} else if (eta < 18); {
  var biglietto = ((kilometri * 0.21) - (scontoMin));
  console.log(biglietto);
} else if (eta > 64); {
  var biglietto = ((kilometri * 0.21) - (scontoMin));
  console.log(biglietto);
}
