/* --> Esta línea siempre debe ir al inicio del archivo <-- */
"use strict";

// Seleccionar elementos del DOM por su ID
var btnSumar = document.getElementById("btn_add");
var btnIgual = document.getElementById("btn_equal");
var btnPunto = document.getElementById("btn_dot");
var btnZero = document.getElementById("btn_0");
var displayOperaciones = document.getElementById("op");

// Asignar eventos a los elementos del DOM
btnSumar.addEventListener("click", sumarFn);
btnIgual.addEventListener("click", igualFn);
btnPunto.addEventListener("click", puntoFn);
btnZero.addEventListener("click", zeroFn);

// Declarar funciones
function sumarFn() {
  console.log("+"); // Debug
  // Concatenar el signo de suma al display
  displayOperaciones.textContent += "+";
}

function igualFn() {
  console.log("="); // Debug
  displayOperaciones.textContent += "=";
}

function puntoFn() {
  console.log("."); // Debug
  displayOperaciones.textContent += ".";
}

function zeroFn() {
  console.log("0"); // Debug
  displayOperaciones.textContent += "0";
}
