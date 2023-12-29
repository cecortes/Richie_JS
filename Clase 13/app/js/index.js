"use strict";

/* --> Sentencias Condicionales <-- */
/* 
/* if (condicion) {
/* 	// Bloque de código Se ejecuta si la condición es verdadera.
/* } else {
/* 	// Bloque de código Se ejecuta si la condición es falsa.
/* }
*/

/*
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
  console.log("Puedes votar");
  console.log("Puedes conducir");
} else {
  console.log("Eres menor de edad");
}
*/

/*
let banderaError = true;
if (banderaError) {
  console.log("Error");
  banderaError = false;
} else {
  console.log("Todo bien");
  banderaError = true;
}

console.log(banderaError);
*/
/*
let cadena = "o";
console.log(cadena);

if (cadena) {
  console.log("Bloque Verdadero");
} else {
  console.log("Bloque Negativo");
}
*/

/* Valores Falsy */
// false
// 0
// ""
// null
// undefined
// NaN

/* Valores Truthy */
// true
// 1
// " "
// "a"
/*
let pseudoNumero = -1;
console.log(pseudoNumero);

if (pseudoNumero) {
  console.log("Bloque Verdadero");
} else {
  console.log("Bloque Negativo");
}
*/

/* El signo de exclamación (!) niega el valor de una variable */
/*
let banderaError = true; // true
banderaError = !banderaError; // banderaError = false
console.log(banderaError); // false
if (banderaError) {
  console.log("Bloque Verdadero");
} else {
  console.log("Bloque Negativo"); // Se ejecuta
}
*/
/*
let animal = "serpiente"; // animal -> "serpiente"
if (animal === "perro") {
  console.log("Es un perro");
} else if (animal === "gato") {
  console.log("Es un gato");
} else if (animal === "rata") {
  console.log("Es una rata");
} else {
  console.log("animal no reconocido"); // Se ejecuta
}
*/

/* Operadores Lógicos */
/*
// && -> AND (Y) Condición1 && Condición2
// || -> OR (O)  || Condición1
// ! -> NOT (Negación)
*/
let pastilla1 = "verde"; // pastilla1 -> "verde"
let pastilla2 = "roja"; // pastilla2 -> "roja"
if (pastilla1 === "roja" && pastilla2 === "azul") {
  console.log("Caja Especial");
} else if (pastilla1 === "azul" || pastilla2 === "azul") {
  console.log("Caja Azul");
} else if (
  (pastilla1 === "roja" && pastilla2 === "roja") ||
  pastilla1 === "verde"
) {
  console.log("Caja Roja"); // Se ejecuta
} else {
  console.log("Caja Normal");
}

/*
Ficha1 = 11 Ficha1 = 11
Ficha2 = 12 Ficha2 = 21
Ficha3 = 13 Ficha3 = 31

Ficha1 = 21 Ficha1 = 12
Ficha2 = 22 Ficha2 = 22
Ficha3 = 23 Ficha3 = 32

Ficha1 = 31 Ficha1 = 13
Ficha2 = 32 Ficha2 = 23
Ficha3 = 33 Ficha3 = 33
*/
