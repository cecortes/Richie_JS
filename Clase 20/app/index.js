"use strict";

// Método findIndex(), devuelve el índice del primer elemento que cumple con la condición dada.
// Si no se encuentra ningún elemento que cumpla con la condición, devuelve -1.

const numbers = [4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15];

/*

function mayorA10(numero) {
  return numero > 10;
}

const index = numbers.findIndex(mayorA10);
console.log(index); // 6


const index = numbers.findIndex((elemento) => elemento > 10);

console.log(
  ">> El valor del arreglo donde la condición se cumple es: " +
    numbers[index] +
    "\n\r Con el índice: " +
    index
); // 11

let arregloPalabras = ["hola", "mundo", "cómo", "estás", "hoy"];

const index2 = arregloPalabras.findIndex((elemento) => elemento === "hoy");
console.log(
  ">> El índice del elemento es: " +
    index2 +
    "\n\r" +
    "Con el valor de: " +
    arregloPalabras[index2]
); */

// Método find(), devuelve el primer elemento que cumple con la condición dada.
// Si no se encuentra ningún elemento que cumpla con la condición, devuelve undefined.

/*
const arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroEncontrado = arregloNumeros.find((elemento) => elemento > 5);
console.log(numeroEncontrado); // 6

const arregloPalabras = ["hola", "mundo", "cómo", "estás", "hoy"];
const palabraEncontrada = arregloPalabras.find(
  (palabra) => palabra.length > 4 && palabra.startsWith("es")
);
console.log(palabraEncontrada); // mundo
*/

// Método some(), devuelve true si al menos un elemento cumple con la condición dada.
// Si no se encuentra ningún elemento que cumpla con la condición, devuelve false.

const arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = arregloNumeros.some((elemento) => elemento > 5);
if (resultado) {
  console.log("Al menos un número es mayor a 5");
}
