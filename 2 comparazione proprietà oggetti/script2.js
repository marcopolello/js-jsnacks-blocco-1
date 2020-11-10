// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

var arrBici =
[
  {
    name : 'Scott',
    weight : 10
  },
  {
    name : 'Trek',
    weight : 8
  },
  {
    name : 'Kona',
    weight : 11
  },
  {
    name : 'Marin',
    weight : 7
  },
  {
    name : 'Merida',
    weight : 9
  }
];
// console.log(arrBici);
// variabile per paragonare ogni oggetto al primo
var leggera = arrBici[0];
//ciclo tutto l'array con gli oggetti
for (var i = 0; i < arrBici.length; i++) {
  var elemento = arrBici[i];
  console.log(elemento);
  if (leggera.weight > elemento.weight) {
    leggera = elemento; //cambia valore ogni volta che trova un elemento più leggero
  }
}
// mi stampa quella più leggera trovata all'attraversamento dell'array
console.log("la bici più leggera è: ", leggera);
