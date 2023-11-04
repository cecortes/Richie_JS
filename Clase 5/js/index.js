/* --> Esta línea siempre debe ir al inicio del archivo <-- */
"use strict";

// Seleccionar elementos del DOM por su ID
var btnSumar = document.getElementById("btn_add");
var btnIgual = document.getElementById("btn_equal");
var btnPunto = document.getElementById("btn_dot");
var btnZero = document.getElementById("btn_0");
var displayOperaciones = document.getElementById("op");
var displayResultado = document.getElementById("res");
var btnRestar = document.getElementById("btn_sub");
var btnTres = document.getElementById("btn_3");
var btnDos = document.getElementById("btn_2");
var btnUno = document.getElementById("btn_1");
var btnX = document.getElementById("btn_mult");
var btnSeis = document.getElementById("btn_6");
var btnCinco = document.getElementById("btn_5");
var btnCuatro = document.getElementById("btn_4");
var btnDiv = document.getElementById("btn_div");
var btnNueve = document.getElementById("btn_9");
var btnOcho = document.getElementById("btn_8");
var btnSiete = document.getElementById("btn_7");

// Asignar eventos a los elementos del DOM
btnSumar.addEventListener("click", SumarFn);
btnIgual.addEventListener("click", IgualFn);
btnPunto.addEventListener("click", PuntoFn);
btnZero.addEventListener("click", ZeroFn);
btnRestar.addEventListener("click", RestarFn);
btnTres.addEventListener("click", TresFn);
btnDos.addEventListener("click", DosFn);
btnUno.addEventListener("click", UnoFn);
btnX.addEventListener("click", MultiplicarFn);
btnSeis.addEventListener("click", SeisFn);
btnCinco.addEventListener("click", CincoFn);
btnCuatro.addEventListener("click", CuatroFn);
btnDiv.addEventListener("click", DivFn);
btnNueve.addEventListener("click", NueveFn);
btnOcho.addEventListener("click", OchoFn);
btnSiete.addEventListener("click", SieteFn);

// Declarar funciones
function SepararNumeros(cadena) {
  // Si el usuario presiono +
  if (cadena.includes("+")) {
    // Separar los números de la operación
    var num1 = cadena.split("+");
    // Separar el signo de =
    var num2 = num1[1].split("=");

    // Convertir los números a enteros
    var cantidad1 = parseInt(num1[0]);
    var cantidad2 = parseInt(num2[0]);

    // Sumar los números
    var resultado = cantidad1 + cantidad2;

    // Mostrar el resultado en el display
    displayOperaciones.textContent = resultado;
    displayResultado.textContent = resultado;
    displayOperaciones.textContent = "";
  } else if (cadena.includes("-")) {
    // Separar los números de la operación
    var num1 = cadena.split("-");
    // Separar el signo de =
    var num2 = num1[1].split("=");

    // Convertir los números a enteros
    var cantidad1 = parseInt(num1[0]);
    var cantidad2 = parseInt(num2[0]);

    // Restar los números
    var resultado = cantidad1 - cantidad2;

    // Mostrar el resultado en el display
    displayOperaciones.textContent = resultado;
    displayResultado.textContent = resultado;
    displayOperaciones.textContent = "";
  } else if (cadena.includes("x")) {
    // Separar los números de la operación
    var num1 = cadena.split("x");

    // Separar el signo de =
    var num2 = num1[1].split("=");

    // Convertir los números a enteros
    var cantidad1 = parseInt(num1[0]);
    var cantidad2 = parseInt(num2[0]);

    // Multiplicar los números
    var resultado = cantidad1 * cantidad2;

    // Mostrar el resultado en el display
    displayOperaciones.textContent = resultado;
    displayResultado.textContent = resultado;
    displayOperaciones.textContent = "";
  } else if (cadena.includes("/")) {
    // Separar los números de la operación
    var num1 = cadena.split("/");

    // Separar el signo de =
    var num2 = num1[1].split("=");

    // Convertir los números a enteros
    var cantidad1 = parseInt(num1[0]);
    var cantidad2 = parseInt(num2[0]);

    // Dividir los números
    var resultado = cantidad1 / cantidad2;

    // Mostrar el resultado en el display
    displayOperaciones.textContent = resultado;
    displayResultado.textContent = resultado;
    displayOperaciones.textContent = "";
  }
}

function SumarFn() {
  console.log("+"); // Debug
  // Concatenar el signo de suma al display
  displayOperaciones.textContent += "+";
}

function IgualFn() {
  console.log("="); // Debug
  displayOperaciones.textContent += "=";

  // Obtener el contenido del display
  var operacion = displayOperaciones.textContent;

  // Llamar a la función que separa los números
  SepararNumeros(operacion);
}

function PuntoFn() {
  console.log("."); // Debug
  displayOperaciones.textContent += ".";
}

function ZeroFn() {
  console.log("0"); // Debug
  displayOperaciones.textContent += "0";
}

function RestarFn() {
  console.log("-"); // Debug
  displayOperaciones.textContent += "-";
}

function TresFn() {
  console.log("3"); // Debug
  displayOperaciones.textContent += "3";
}

function DosFn() {
  console.log("2"); // Debug
  displayOperaciones.textContent += "2";
}

function UnoFn() {
  console.log("1"); // Debug
  displayOperaciones.textContent += "1";
}

function MultiplicarFn() {
  console.log("x"); // Debug
  displayOperaciones.textContent += "x";
}

function SeisFn() {
  console.log("6"); // Debug
  displayOperaciones.textContent += "6";
}

function CincoFn() {
  console.log("5");
  displayOperaciones.textContent += "5";
}

function CuatroFn() {
  console.log("4");
  displayOperaciones.textContent += "4";
}

function DivFn() {
  console.log("/");
  displayOperaciones.textContent += "/";
}

function NueveFn() {
  console.log("9");
  displayOperaciones.textContent += "9";
}

function OchoFn() {
  console.log("8");
  displayOperaciones.textContent += "8";
}

function SieteFn() {
  console.log("8");
  displayOperaciones.textContent += "7";
}
