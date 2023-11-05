/* --> Esta línea siempre debe ir al inicio del archivo <-- */
"use strict";

// Seleccionar elementos del DOM por su ID
let btnSumar = document.getElementById("btn_add");
let btnIgual = document.getElementById("btn_equal");
let btnPunto = document.getElementById("btn_dot");
let btnZero = document.getElementById("btn_0");
let displayOperaciones = document.getElementById("op");
let displayResultado = document.getElementById("res");
let btnRestar = document.getElementById("btn_sub");
let btnTres = document.getElementById("btn_3");
let btnDos = document.getElementById("btn_2");
let btnUno = document.getElementById("btn_1");
let btnX = document.getElementById("btn_mult");
let btnSeis = document.getElementById("btn_6");
let btnCinco = document.getElementById("btn_5");
let btnCuatro = document.getElementById("btn_4");
let btnDiv = document.getElementById("btn_div");
let btnNueve = document.getElementById("btn_9");
let btnOcho = document.getElementById("btn_8");
let btnSiete = document.getElementById("btn_7");

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
    let num1 = cadena.split("+");
    // Separar el signo de =
    let num2 = num1[1].split("=");

    // Convertir los strings a numeros
    let cantidad1 = Number(num1[0]);
    let cantidad2 = Number(num2[0]);

    // Sumar los números
    let resultado = cantidad1 + cantidad2;
    // Formato a solo 4 decimales
    resultado = resultado.toFixed(6);

    // Mostrar el resultado en el display
    displayOperaciones.textContent = resultado;
    displayResultado.textContent = resultado;
    displayOperaciones.textContent = "";
  } else if (cadena.includes("-")) {
    // Separar los números de la operación
    let num1 = cadena.split("-");
    // Separar el signo de =
    let num2 = num1[1].split("=");

    // Convertir los números a enteros
    let cantidad1 = Number(num1[0]);
    let cantidad2 = Number(num2[0]);

    // Restar los números
    let resultado = cantidad1 - cantidad2;
    // Formato a solo 4 decimales
    resultado = resultado.toFixed(6);

    // Mostrar el resultado en el display
    displayOperaciones.textContent = resultado;
    displayResultado.textContent = resultado;
    displayOperaciones.textContent = "";
  } else if (cadena.includes("x")) {
    // Separar los números de la operación
    let num1 = cadena.split("x");

    // Separar el signo de =
    let num2 = num1[1].split("=");

    // Convertir los números a enteros
    let cantidad1 = Number(num1[0]);
    let cantidad2 = Number(num2[0]);

    // Multiplicar los números
    let resultado = cantidad1 * cantidad2;
    // Formato a solo 4 decimales
    resultado = resultado.toFixed(6);

    // Mostrar el resultado en el display
    displayOperaciones.textContent = resultado;
    displayResultado.textContent = resultado;
    displayOperaciones.textContent = "";
  } else if (cadena.includes("/")) {
    // Separar los números de la operación
    let num1 = cadena.split("/");

    // Separar el signo de =
    let num2 = num1[1].split("=");

    // Convertir los números a enteros
    let cantidad1 = Number(num1[0]);
    let cantidad2 = Number(num2[0]);

    // Dividir los números
    let resultado = cantidad1 / cantidad2;
    // Formato a solo 4 decimales
    resultado = resultado.toFixed(6);

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
  let operacion = displayOperaciones.textContent;

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
