"use strict";

$(function () {
  /* --> DOM <-- */
  const $inText = $("#input_text");
  const $tlH1 = $("#title_h1");
  const $btnMain = $("#button_main");

  /* --> Evento MouseOver <-- */
  /* Este evento se dispara cuando el puntero del mouse
  /* se encuentra sobre el elemento declarado 
  $tlH1.on("mouseover", function () {
    $tlH1.css("color", "rgb(255, 120, 10)");
    $tlH1.css("cursor", "pointer");
  });

  $tlH1.on("mouseover", () => {
    $tlH1.css("color", "rgb(255, 120, 10)");
    $tlH1.css("cursor", "pointer");
  });
  */

  $tlH1.on("mouseover", cambiaRojo);

  /* --> Evento MouseOut <-- */
  /* Este evento se dispara cuando el puntero del mouse
  /* sale del elemento declarado 
  $tlH1.on("mouseout", function () {
    $tlH1.css("color", "azure");
  });

  $tlH1.on("mouseout", () => {
    $tlH1.css("color", "azure");
  });
  */

  $tlH1.on("mouseout", cambiaAzul);

  /* --> Evento KeyPress <-- */
  $inText.on("input", muestraConsola);

  /* --> cambiaRojo <-- */
  function cambiaRojo() {
    $tlH1.css("color", "rgb(255, 120, 10)");
    $tlH1.css("cursor", "pointer");
  }

  /* --> cambiaAzul <-- */
  function cambiaAzul() {
    $tlH1.css("color", "azure");
  }

  function muestraConsola() {
    console.log($inText.val());
  }
});
