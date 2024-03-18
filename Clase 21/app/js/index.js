"use strict";

// Ready
$(function () {
  /* --> DOM <-- */
  const btnOcultar = $("#btn-ocultar");
  const title = $("#title");

  /* --> Eventos <-- */
  btnOcultar.click(() => {
    console.log("Click en el botón ocultar");
    // Cambiar el estilo del elemento con id title
    title.css("color", "#FF0000");
    title.fadeOut(2000);
  });
});
