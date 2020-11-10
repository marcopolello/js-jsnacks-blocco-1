var arrayObj =
[
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'}
];
console.log(arrayObj);

// creo una copia dell'array
var clone = arrayObj.slice(0, 4);
console.log(clone);

for (var i = 0; i < clone.length; i++) {
  //console.log(clone[i]);
  var elemento = clone[i];
  elemento.position = Math.random().toString(36).substring(7);
  console.log(elemento);
}
