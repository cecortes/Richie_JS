"use strict";

var numero1 = 6;
var numero2 = 5;

// Llamar a la función sumar
SumarNumeros(numero1, numero2);
RestarNumero(numero1, numero2);
MultiplicarNumero(numero1, numero2);
DividirNumero(numero1, numero2);
// Llamar a la función resta
// Llamar a la función multiplicar
// Llamar a la función dividir

// Función sumar
function SumarNumeros(numero1, numero2) {
  // Sumar los dos números

  var resultado = numero1 + numero2;

  // Mostrar el resultado
  console.log(resultado);
}

function RestarNumero(numero1, numero2) {
  var resultado = numero1 - numero2;

  console.log(resultado);
}
/* --> de acuero al diagrama de bloque algoritmo 4 en azul <-- */

function MultiplicarNumero(numero1, numero2) {
  var resultado = numero1 * numero2;

  console.log(resultado);
}

function DividirNumero(numero1, numero2) {
  var resultado = numero1 / numero2;

  console.log(resultado);
}

/* --> Este tipo de funciones se llaman funciones declaradas. <-- */
