"use strict";

// Función que se ejecuta cuando el documento está listo
$(function () {
  const modal = document.getElementById("modal");
  const modalJQuery = $("#modal");
  const btnCancel = $("#cancel");
  const btnEnviar = $("#enviar");
  const btnMostrar = $("#mostrar");

  // Retardo de 10segundos para mostrar el modal
  setTimeout(MuestraModal, 3000);

  // Función que muestra el modal
  function MuestraModal() {
    //Agregando el atributo open no se muestra el modal como debería.
    //modal.setAttribute("open", true);
    modal.showModal();
  }

  // Función que cierra el modal
  btnCancel.on("click", () => {
    modal.close();
  });

  // Variable e
  btnEnviar.on("click", (e) => {
    // Quita el comportamiento por defecto del botón y no recarga la página
    //e.preventDefault();
    modal.close();
  });

  btnMostrar.on("click", () => {
    modal.showModal();
  });
});
