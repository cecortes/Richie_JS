"use strict";

let resultado = "";

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
  i = i + 1; // i = 2, i = 3, i = 4, i = 5, i = 6, i = 7, i = 8, i = 9, i = 10

  // Evaluar cuando i sea impar
  if (i % 2 === 1) {
    continue; // Salta a la siguiente iteración
  }

  resultado = resultado + i; // "246810"
} while (i < 10);

console.log(resultado); // "246810"

// Hacer un bucle que imprima todas las letras del abecedario.
// Hacer un bucle que imprima todas las letras del abecedario, pero que no imprima las vocales.
