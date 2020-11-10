// Creare un oggetto palla che abbia le seguenti proprietà.
// nome = palla
// peso = 10
// - dare la possibilità attraverso un prompt di modificare il peso della palla

//creo oggetto palla
var object = {
  nome : 'palla',
  peso : 10
}
console.log(object);

// creo una variabile per salvare input utente che mi andrà a modificare la chiave peso
var input = parseInt(prompt("scrivi il peso della palla"));
object.peso = input;
console.log(object);  //l'oggetto con il nuovo peso


// ALTRO METODO CON UNA TIMEFUNCTION
/* setTimeout(changeValue, 1)
function changeValue() {
  var input = parseInt(prompt("scrivi il peso della palla"));
  object.peso = input;
  console.log(object);
} */
