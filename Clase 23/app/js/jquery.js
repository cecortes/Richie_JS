"use strict";

$(function () {
  // DOM
  //document.getElementById("input_text");
  //document.querySelector(".input_text");
  const $inText = $("#input_text");

  $inText.on("input", teclado());

  function teclado() {
    console.log($inText.val());
  }
});
