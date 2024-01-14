"use strict";

let msg = "Hola chicharrin";

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
*/

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

console.log(resultado);

// x / 2 = entero es divisible entre 2
