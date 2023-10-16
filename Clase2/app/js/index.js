/* --> 
*Variables pueden declararse con
*var, let o const.
<-- */

/* -->
*var: es la forma para declarar una variable global.
*let: es la forma para declarar una variable local.
*const: es la forma para declarar una constante, su valor no puede cambiar.
<-- */

// var
// Una variable global puede ser accedida desde cualquier parte del código.
var global = "Soy una variable global";
console.log(global);
// Como es una variable global, puedo acceder a ella desde cualquier parte del código.
global = "Soy una variable global modificada";
console.log(global);

// Tipos de datos
// String, Number, Boolean.
var string = "Soy un string ";
var string2 = "123456";
console.log(string);
console.log(string2);
var string3 = string + string2; // Concatenación de strings. >> Soy un string 123456
console.log(string3);
var string4 = string * string2; // Operación no válida. >> NaN (Not a Number)
console.log(string4);

// Number
var number = 10; // Binario 1010
console.log(number);
var number2 = 10.5;
console.log(number2);
var number3 = number + number2; // Operación válida. >> 20.5 Suma
console.log(number3);
number3 = number - number2; // Operación válida. >> -0.5 Resta
console.log(number3);
number3 = number * number2; // Operación válida. >> 105 Multiplicación
console.log(number3);
number3 = number / number2; // Operación válida. >> 0.9523809523809523 División
console.log(number3);

// Boolean 1 = true, 0 = false
var boolean = true;
console.log(boolean);
boolean = false;
console.log(boolean);
// Las Variables booleanas pueden ser utilizadas para validar condiciones o como banderas.
var bandera = true;

if (bandera) {
  console.log("La bandera es verdadera");
  bandera = false;
} else {
  console.log("La bandera es falsa");
}

if (bandera) {
  console.log("La bandera sigue siendo verdadera");
} else {
  console.log("La bandera cambió a falsa");
}

// Calculadora
// Pedir al usuario dos números y una operación.
// Mostrar el resultado de la operación.
// Pedir numeros y almacenarlos en variables.
var numero1 = prompt("Ingresa el primer número: "); // prompt recibe los datos como string.
var numero2 = prompt("Ingresa el segundo número: ");
numero1 = parseInt(numero1); // parseInt convierte un string a un número entero.
numero2 = parseInt(numero2);
var banderaError = false;

// Validar que los datos sean números.
if (isNaN(numero1) || isNaN(numero2)) {
  // isNaN es una función que valida si el dato no es un número.
  // Si no es un número, se ejecuta el código.
  //console.log(">> Los valores no son números"); // Debug
  alert("Los valores no son números");
  banderaError = true;
}

var resultado;
// Pedir la operación y almacenarla en una variable.
var operacion = prompt("Ingresa la operación que deseas realizar: ");

// Validar la operación y realizarla.
if (operacion == "+") {
  //console.log(">> Suma"); // Debug

  if (!banderaError) {
    // ! es un operador de negación.
    // Si no hay error, se ejecuta el código.
    resultado = numero1 + numero2;
    alert("El resultado de la suma es: " + resultado);
  }
} else if (operacion == "-") {
  //console.log(">> Resta"); // Debug

  if (!banderaError) {
    resultado = numero1 - numero2;
    alert("El resultado de la resta es: " + resultado);
  }
} else if (operacion == "*") {
  //console.log(">> Multiplicación"); // Debug

  if (!banderaError) {
    resultado = numero1 * numero2;
    alert("El resultado de la multiplicación es: " + resultado);
  }
} else if (operacion == "/") {
  //console.log(">> División"); // Debug

  if (!banderaError) {
    resultado = numero1 / numero2;
    alert("El resultado de la división es: " + resultado);
  }
} else {
  //console.log(">> Operación no válida"); // Debug
  alert("Operación no válida");
}
