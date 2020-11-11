
function activebutton() {
  var eta = prompt("quanti anni hai?");
  console.log("eta del passeggero: " + eta);

  var kilometri = prompt("quanti kilometri vuoi fare?");
  console.log("kilometri da percorrere: "+ kilometri);

  var biglietto = (kilometri * 0.21);
  console.log("costo del biglietto: " + biglietto);

  var scontoMin = (biglietto * 20) / 100;
  console.log("sconto minorenni: " + scontoMin);

  var scontoMax = (biglietto * 40) / 100;
  console.log("sconto over 65: " + scontoMax);


  if (eta >= 18 && eta <= 65) {
    document.getElementById('result').innerHTML = ("il tuo biglietto è di " + biglietto + "euro");
    console.log(result);
  } else if (eta < 18) {
    document.getElementById('result').innerHTML = ("il tuo biglietto è di " + (biglietto - scontoMin) + "euro");
    console.log(result);
  } else if (eta > 65) {
    document.getElementById('result').innerHTML = ("il tuo biglietto è di " + (biglietto - scontoMax) + "euro");
    console.log(result);
  }
}
