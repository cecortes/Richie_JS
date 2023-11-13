"use strict";

/* DOM */
let selector = document.getElementById("tema");
let html = document.querySelector("html");

/* Eventos */
document.body.style.padding = "20px";

/* Funciones */
function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

/* Eventos */
selector.onchange = function () {
  selector.value === "obscuro"
    ? update("black", "white")
    : update("white", "black");
};
