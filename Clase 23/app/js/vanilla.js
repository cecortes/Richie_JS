"use strict";

const inText = document.getElementById("input_text");
const btn_test = document.getElementById("button_test");
const tl_h1 = document.getElementById("title_h1");

setTimeout(() => {
  console.log(inText.innerText);
}, 3000);

inText.addEventListener("input", teclado);

function teclado() {
  console.log(inText.value);
}
