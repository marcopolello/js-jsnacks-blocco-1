// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// STEP”:
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
// consegna 12.25

var teams =
[
  {
    name : "Milan",
    points : 0,
    fouls : 0
  },
  {
    name : "Inter",
    points : 0,
    fouls : 0
  },
  {
    name : "Juventus",
    points : 0,
    fouls : 0
  },
  {
    name : "Roma",
    points : 0,
    fouls : 0
  },
  {
    name : "Napoli",
    points : 0,
    fouls : 0
  }
];


for (var i = 0; i < teams.length; i++) {
  teams[i].points = numRandom();
  teams[i].fouls = numRandom();
  //console.log(teams[i]);
}


// funzione per generare un numero random
function numRandom() {
  return Math.floor(Math.random() * 100) + 1;
}
