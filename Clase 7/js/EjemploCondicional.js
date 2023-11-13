"use strict";

/* 
* Sintaxis básica del If... else
* if = si?, else = no
if (condición) {
  Este código se ejecuta si la condición es verdadera
}
else {
  Este código se ejecuta si la condición es falsa
}
*/

// Ejemplo 1
let edad = 16;
if (edad >= 18) {
  // Si la edad es mayor o igual a 18
  //console.log("Eres mayor de edad");
} else {
  // Si la edad es menor a 18
  //console.log("Eres menor de edad");
}

// Ejemplo 2
let flgCondicion = false;

if (flgCondicion) {
  // Si la condición es verdadera
  //console.log(">> La condición es verdadera");
} else {
  // Si la condición es falsa
  //console.log(">> La condición es falsa");
}

// Ejemplo 3
/*
let edad2 = 16;

if (edad2 >= 80) {
  // Si la edad es mayor o igual a 80
  console.log(">> Eres adulto mayor de 80");
} else if (edad2 >= 60) {
  // Si la edad es mayor o igual a 60
  console.log(">> Eres adulto mayor");
} else if (edad2 >= 40) {
  // Si la edad es mayor o igual a 40
  console.log(">> Eres adulto de 40");
} else if (edad2 >= 18) {
  // Si la edad es mayor o igual a 18
  console.log(">> Eres mayor de edad");
} else {
  // Si la edad es menor a 18
  console.log(">> Eres menor de edad");
}
*/

// Ejemplo 4
let fruta = "kiwi";
if (fruta === "manzana") {
  console.log("la fruta es roja");
} else if (fruta === "platano") {
  console.log("la fruta es amarilla");
} else if (fruta === "kiwi") {
  console.log("la fruta es verde");
} else if (fruta === "naranja") {
  console.log("la fruta es naranja");
} else {
  console.log("la fruta no esta registrada");
}
