// Use strict
"use strict";

/* Llamado a la función
Saludo();

// Llamado a la función
SaludoConNombre("César");

Saludo();
Saludo();
Saludo();
SaludoConNombre("César");
SaludoConNombre("Juan");
SaludoConNombre("Pedro");
SaludoConNombre("Churpio");

SaludoConNombreYApellido("César", "García"); */

// Funciones
function Saludo() {
  console.log("Hola");
}

// Función con parámetros
function SaludoConNombre(nombre) {
  console.log("Hola " + nombre);
}

// Función con múltiples parámetros
function SaludoConNombreYApellido(nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido);
}

// Funciones con retorno
function Sumar(num1, num2) {
  let resultado = num1 + num2;

  return resultado;
}

// Funciones con parámetros por defecto
function SumarConDefecto(num1 = 0, num2 = 0) {
  let resultado = num1 + num2;

  return resultado;
}

// Funciones anónimas
let SaludoAnonimo = function () {
  console.log("Hola Anónimo");
  return "Hola Anónimo";
};

let SaludoAnonimoConNombre = function (nombre) {
  console.log("Hola " + nombre);
  return "Hola " + nombre;
};

// Funciones flecha
let SaludoFlecha = () => {
  console.log("Hola Flecha");
  return "Hola Flecha";
};

const pepito = Sumar(5, 3);
/*
console.log(pepito);

console.log(Sumar(5, 5));

console.log(Sumar());

console.log(SumarConDefecto());
console.log(SumarConDefecto(5));
console.log(SumarConDefecto(5, 5));

console.log(SumarConDefecto(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5));
console.log(
  Sumar(1, 2) + Sumar(1, 2) + Sumar(1, 2) + Sumar(1, 2) + Sumar(1, 2)
);
console.log(Sumar(1, 2) + Sumar("1", "2"));
console.log(Sumar(1, 2) + Sumar("Hola", "Mundo"));

SaludoAnonimo();
SaludoAnonimo();
SaludoAnonimo();
*/
SaludoAnonimoConNombre("César");
SaludoFlecha();
