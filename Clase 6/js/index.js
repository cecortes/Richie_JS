"use strict";

/* -->> 1 Tipos de Datos <<-- */
// String, Cadena de Texto, literal de texto.
let cadenaUno = "Hola Mundo";
let cadenaDos = "Candena de Texto";
let cadenaTres = "Cadena 'de' Texto";
let cadenaCuatro = 'Cadena "de" Texto';
let cadenaCinco = "12.90";

console.log(cadenaUno);
console.log(cadenaDos);
console.log(cadenaTres);
console.log(cadenaCuatro);
console.log(cadenaCinco + 1); // Concatenación cuando se trata de un string y un número.

let c1 = "Hola ";
let c2 = "Mundo";
console.log(c1 + c2);

var c3 = "Hola ";
var c4 = "Mundo";
console.log(c3 + c4);

// var es la forma antigua de declarar variables y let es la forma nueva de declarar variables.

/* -->> 2 Enteros <<-- */
let numeroUno = 10;
let numeroDos = 2;
let numeroTres = 3.5;

console.log("\n>> Enteros <<"); // \n es un salto de línea.
console.log(numeroUno);
console.log(numeroDos);
console.log(numeroTres + " Este no es un entero");

console.log("\n>> Operaciones Aritméticas <<");
console.log(numeroUno + numeroTres);

/* -->> 3 Booleanos <<-- */
let booleanoUno = true; //1
let booleanoDos = false; //0

console.log("\n>> Booleanos <<");
console.log(booleanoUno);
console.log(booleanoDos);
// Los booleanos no se pueden sumar, restar, multiplicar o dividir.
// Los booleanos solo se pueden comparar.
// Los booleanos se utilizan como banderas para saber si algo es verdadero o falso.

/* -->> 4 Método TypeOf <<-- */
// El método TypeOf nos permite saber el tipo de dato de una variable.
let variable;
console.log("\n>> Método TypeOf <<");
console.log(typeof cadenaUno);
console.log(typeof numeroUno);
console.log(typeof numeroTres);
console.log(typeof booleanoUno);
console.log(typeof variable);

/* -->> 5 Conversión de datos <<-- */
let numeroFalso = "12.90";
let numeroReal = 20.98909;
// Convertir un string a un número.
let convertidoNumero = Number(numeroFalso); // Number es una función que convierte un string a un número entero o decimal.
let convierteEntero = parseInt(numeroFalso); // parseInt convierte un string a un número entero.
let convierteDecimal = parseFloat(numeroFalso); // parseFloat convierte un string a un número decimal.
console.log("\n>> Conversión de datos <<");
console.log(convertidoNumero);
console.log(convierteEntero);
console.log(convierteDecimal);
// Convertir un número a un string.
let convertirString = String(numeroReal); // String convierte un número a un string.
console.log(convertirString);

/* -->> 6 Operadores <<-- */
// Operadores aritméticos.
// Suma.
let suma = 10 + 20;
// Resta.
let resta = 10 - 20;
// Multiplicación.
let multiplicacion = 10 * 20;
// División.
let division = 10 / 20;
// Módulo.
let modulo = 20 % 30;
console.log("\n>> Operadores Aritméticos <<");
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo); // El módulo es el residuo de una división y sirve para saber si un número es par o impar.
// Incremento.
let incremento = 70;
console.log("\n>> Operadores Incremento <<");
console.log(incremento);
incremento++; // Incrementa en 1.
console.log("Despues del incremento ++");
console.log(incremento);
// Decremento.
let decremento = 70;
console.log("\n>> Operadores Decremento <<");
console.log(decremento);
decremento--; // Decrementa en 1.
console.log("Despues del decremento --");
console.log(decremento);

// Operadores de asignación.
let asignacion = 20;
console.log("\n>> Operadores de Asignación <<");
console.log(asignacion);
asignacion += 10; // asignacion = asignacion + 10;
console.log("Despues de la asignación += 10");
console.log(asignacion);
console.log();
let asignacion2 = 20;
console.log(asignacion2);
asignacion2 -= 10; // asignacion2 = asignacion2 - 10;
console.log("Despues de la asignación -= 10");
console.log(asignacion2);

// Operadores de comparación.
let comparacion = 10;
let comparacion2 = 20;
console.log("\n>> Operadores de Comparación <<");
console.log(comparacion);
console.log(comparacion2);
console.log("Comparación de igualdad");
console.log(comparacion == comparacion2); // Comparación de igualdad. == Compara el valor de dos variables.
console.log("Comparación de desigualdad");
console.log(comparacion != comparacion2); // Comparación de desigualdad. != Compara el valor de dos variables.'! ='
console.log("Comparación de igualdad estricta");
console.log(comparacion === comparacion2); // Comparación de igualdad estricta. === Compara el valor y el tipo de dato de dos variables.
console.log("Comparación de desigualdad estricta");
console.log(comparacion !== comparacion2); // Comparación de desigualdad estricta. !== Compara el valor y el tipo de dato de dos variables. '! = ='
console.log("Comparación mayor que");
console.log(comparacion > comparacion2); // Comparación mayor que. > Compara si el primer valor es mayor que el segundo.
console.log("Comparación menor que");
console.log(comparacion < comparacion2); // Comparación menor que. < Compara si el primer valor es menor que el segundo.
console.log("Comparación mayor o igual que");
console.log(comparacion >= comparacion2); // Comparación mayor o igual que. >= Compara si el primer valor es mayor o igual que el segundo.
console.log("Comparación menor o igual que");
console.log(comparacion <= comparacion2); // Comparación menor o igual que. <= Compara si el primer valor es menor o igual que el segundo.
