"use strict";

let Resultado = "";

let i = 0;

/* 

while (i < 5000) {
  i = i + 1;
  Resultado = Resultado + i; //"1234"

  // Evaluar cuando i sea 3
  if (i === 9) {
    break; // Salir del bucles
  }
}

console.log(Resultado); // "1234"

*/

// Ejemplo Do...While, se ejecuta al menos una vez el código dentro del bucle.

/*
do {
  i = i + 1;
  Resultado = Resultado + i; //"12345"
} while (i < 0); // Cuando la condición sea falsa, se ejecuta el código

console.log(Resultado); // "12345"
*/

do {
  i = i + 1;
  // Evaluar cuando i sea par
  Resultado = Resultado + i;
} while (i < 10);

console.log(Resultado); // "12345678910"
