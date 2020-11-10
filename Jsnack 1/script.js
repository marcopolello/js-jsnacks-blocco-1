//jsnack 1
//Partendo da un array semplice tipo:
// var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
// quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente

var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
var newArray = [];
console.log(myArray);
//chiedo all'utente due numeri che vanno da 0 a 6 con 2 prompt
var input1 = parseInt(prompt("inserisci un numero da 1 a 6")) - 1;
var input2 = parseInt(prompt("inserisci un numero da 1 a 6")) - 1;
console.log("stampa dal numero: ", input1 + 1, " al numero: ", input2 + 1);
// il primo numero mi dirà da quale elemento dell'array inizierà il nuovo array e il secondo dove finirà
var posizione1 = myArray.indexOf(myArray[input1]);
var posizione2 = myArray.indexOf(myArray[input2]);
console.log(posizione1, "<--posizione nell'array di input1", posizione2,"<--posizione nell'array di input2");
//devo ciclare tutto l'array e pushare nel nuovo array tutti gli elementi compresi tra le 2 posizioni
for (var i = 0; i < myArray.length; i++) {
  var elemento = myArray[i];
  //ora mi serve la posizione dell'elemento quindi indexOf di elemento
  if (myArray.indexOf(elemento) >= posizione1 && myArray.indexOf(elemento) <= posizione2) { //l'indice dell'elemento è compreso tra posizione1 e posizione 2 pushalo
    newArray.push(elemento);
  }
}
console.log(newArray);
