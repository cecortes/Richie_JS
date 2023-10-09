/* 
-- Este es un comentario de varias líneas
asdfasdf
asdfasdf
asdfdasfas
asdfasdf
*/

// Este es un comentario de una línea fsgsfdgsdf fsdsfgfsdg

/* --> La consola sirve para mostrar mensajes en la consola del navegador <-- */
console.log(">> Esta es la consola de la aplicación");
console.log(">> Este es otro mensaje de la consola");
console.log(">> Puedo sumar dos números: " + (2 + 2));

/*
Uso de alerts para el usuario
Los alert son mensajes que se muestran en una ventana emergente
*/
alert(">> Este es un mensaje de alerta");
alert(">> Este es otro mensaje de alerta: " + (2 + 2));
// Los alerts pueden pedir datos al usuario.
// El dato que se ingresa se guarda en una variable, CamelCase
var datoIngresado = prompt(">> Por favor ingresa tu nombre: ");

// Variables
// Las variables son contenedores de información.
// Se declaran con la palabra reservada var, let o const
var nombreComun = "Juan";
console.log(">> El nombre es: " + nombreComun);
console.log(">> El dato ingresado es: " + datoIngresado);

// Cambiando el valor de una variable.
nombreComun = "Pedro";
datoIngresado = "Popó";

console.log(">> El nombre ahora es: " + nombreComun);
console.log(">> El dato ingresado ahora es: " + datoIngresado);
