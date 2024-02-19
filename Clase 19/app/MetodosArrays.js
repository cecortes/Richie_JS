"use strict";

// Método for ... of
// El método for ... of nos permite recorrer un array de una forma más sencilla.
/*
for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i]);
}
*/

let miArray = [1, 2, 3, 4, 5];

for (let elemento of miArray) {
  console.log(elemento);
}

console.log("-----");

for (let i of miArray) {
  console.log(i);
}

console.log("-----");

let miCadena = "Hola Mundo";

for (let letra of miCadena) {
  console.log(letra);
}

console.log("-----");

//Ejercicio 1
// Crear una función que reciba un array de números y devuelva la suma de todos los números del array.
// arreglo = [1, 2, 3, 4, 5]

function sumarNumeros(arreglo) {
  let suma = 0; // Variable para almacenar la suma de los numeros
  for (let elemento of arreglo) {
    // Recorre cada elemento del arreglo
    suma += elemento; // Suma el elemento actual al total
  }
  return suma; // Devuelve la suma total
}

let ejemArray = [1, 2, 3, 4, 5];
console.log(sumarNumeros(ejemArray)); // 15
console.log("-----");
let miCadena2 = "Hola Mundo";
console.log(sumarNumeros(miCadena)); // NaN

console.log("-----");

// forEach(), es un método que recibe una función como parámetro y ejecuta esa función por cada elemento del array.

let miArray2 = ["a", "b", "c", "d", "e"];
miArray2.forEach(function (elemento, indice) {
  console.log("El elemento " + elemento + " está en la posición " + indice);
});

console.log("-----");

miArray2.forEach((elemento, indice) => {
  console.log("El elemento " + elemento + " está en la posición " + indice);
});

console.log("-----");

miArray2.forEach((valor, indice) => {
  console.log("El elemento " + indice);
});

console.log("-----");

function cambiarMayusculas(caracter) {
  console.log(caracter.toUpperCase());
}

miArray2.forEach((elemento, indice) => {
  cambiarMayusculas(elemento);
});

console.log("-----");

//Ejercicio 2
// Crear una función que reciba un array de números y devuelva la suma de todos los números del array.

let ejemArray2 = [1, 2, 3, 4, 5];
let misuma = 0;

ejemArray2.forEach((valor) => {
  misuma += valor;
});

console.log(misuma);

/* --> Tarea: <-- */
/* Investigar por tu cuenta el método for...of y forEach()
/* Hacer ejercicios con ambos métodos */
