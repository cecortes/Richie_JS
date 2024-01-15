"use strict";

//let msg = "Hola chicharrin";

let resultado = 0;

/* --> Ciclo For <-- */
/*Ejemplo repetición de 5 veces
for (let i = 0; i < 5; i++) {
  console.log(i);
}


for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
*/

/* --> En una variable del tipo string
 * Se tiene el atributo .length que nos
 * devuelve el número de caracteres de la
 * cadena
 * <-- */
/*
for (let i = 0; i < msg.length; i++) {
  console.log(i);
}

for (let i = 0; i < msg.length; i++) {
  console.log(msg[i]);
}


for (let i = 0; i < msg.length; i++) {
  // Evaluar si es consonante o vocal
  if (
    msg[i] == "a" ||
    msg[i] == "e" ||
    msg[i] == "i" ||
    msg[i] == "o" ||
    msg[i] == "u"
  ) {
    //console.log("Vocal");
    resultado++;
  } else {
    //console.log("Consonante");
  }
}
*/
//console.log(resultado);

// x / 2 = entero es divisible entre 2
/*
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i + " Es un numero par, O"); // Si el residuo es 0 el número es par
  } else {
    console.log(i + " Es un numero impar, X"); // Si el residuo es 1 o cualquier número, el número es impar
  }
}
*/
// Mismo ejercicio pero el Ciclo For al revés.
/*
for (let i = 100; i >= 1; i--) {
  if (i % 2 == 0) {
    console.log(i + " Es un numero par, O"); // Si el residuo es 0 el número es par
  } else {
    console.log(i + " Es un numero impar, X"); // Si el residuo es 1 o cualquier número, el número es impar
  }
}
*/

// Dentro de un bucle for, poner el numero de iteración pero con x. Del 1 al 10

let msg = "";

for (let i = 1; i <= 10; i++) {
  msg += "X";
  console.log(msg);
}

for (let i = 10; i >= 1; i--) {
  msg = msg.replace("X", "");
  console.log(msg);
}
