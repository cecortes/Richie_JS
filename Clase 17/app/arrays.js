"use strict";

/* --> Arreglos Arrays <-- */
// Empezamos a declarar un arreglo de números
let numeros = [1, 2, 3, 4, 5]; // 5 elementos en el arreglo, cada uno separado por coma.

console.log(numeros); // [1, 2, 3, 4, 5]

// Acceder a un elemento del arreglo
console.log(numeros[0]); // 1
console.log(numeros[1]); // 2
console.log(numeros[2]); // 3
console.log(numeros[3]); // 4
console.log(numeros[4]); // 5

let palabras = ["Hola", "Mundo", "Adiós"];

console.log(palabras[0]);
console.log(palabras[1]);
console.log(palabras[2]);

// .length nos permite saber cuántos elementos tiene un arreglo
console.log(numeros.length); // 5
let longuitudNumeros = numeros.length;
console.log(longuitudNumeros); // 5

let longuitudPalabras = palabras.length;
console.log(longuitudPalabras); // 3

let cadena = "Hola Mundo";
console.log(cadena.length); // 10

// Declarar un arreglo vacío
let arreglo = [];
console.log(arreglo); // []
console.log(arreglo.length); // 0
console.log(arreglo[0]); // undefined

// Agregar elementos a un arreglo al principio
arreglo.unshift("indice 0");
console.log(arreglo); // ["indice 0"]
arreglo.unshift("indice 1");
console.log(arreglo); // ["indice 1", "indice 0"]
arreglo.unshift("indice 2");
console.log(arreglo); // ["indice 2", "indice 1", "indice 0"]

// Agregar elementos a un arreglo al final
let arreglo2 = [];
arreglo2.push("index 0");
console.log(arreglo2); // ["index 0"]
arreglo2.push("index 1");
console.log(arreglo2); // ["index 0", "index 1"]
arreglo2.push("index 2");
console.log(arreglo2); // ["index 0", "index 1", "index 2"]

let arregloRich = [1, 2, 3];
console.log(arregloRich); // [1, 2, 3]
arregloRich.push(4, 5, 6, 7, 8, 9); // [1, 2, 3, 4, 5, 6]
console.log(arregloRich); // [1, 2, 3, 4, 5, 6, 7 ,8, 9]
arregloRich.unshift(0, -1, -2, -3, -4, -5, -6, -7, -8, -9); //
console.log(arregloRich); //

// Eliminar el primer elemento de un arreglo
arregloRich.shift();
console.log(arregloRich);

// Eliminar el último elemento de un arreglo
arregloRich.pop();
console.log(arregloRich);

// Editar el arreglo para cambiar 1 por "uno"
arregloRich[9] = "uno";
console.log(arregloRich);
console.log(arregloRich[9]);

// Recorrer un arreglo
let arregloPersonas = [
  "Juan",
  "Pedro",
  "Pablo",
  "María",
  "Ana",
  "Luis",
  "Carlos",
  "Fernando",
  "José",
  "Ricardo",
];

for (let i = 0; i < arregloPersonas.length; i++) {
  console.log(arregloPersonas[i]);
}

let arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arregloNumeros.length; i++) {
  arregloNumeros[i] = arregloNumeros[i] * 2;
}

console.log(arregloNumeros);
