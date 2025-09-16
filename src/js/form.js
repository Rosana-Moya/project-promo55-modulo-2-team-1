'use strict';

console.log('>> Ready :)');

// ------------------------------
// ELEMENTOS DOM
// ------------------------------

// Collapsables
const collapsibleHeaders = document.querySelectorAll(".collapsible__header");
const collapsibleContents = document.querySelectorAll(".collapsible__content");

// Formulario - inputs
const inputName = document.getElementById("name");
const inputMessage = document.getElementById("message");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputDate = document.getElementById("date");
const inputAddress = document.getElementById("address");
const inputPhoto = document.getElementById("photo");

// Sección de compartir
const downloadButton = document.querySelector(".js-download");
const resetButton = document.querySelector(".js-reset");
const formSubmitButton = document.querySelector(".js-create");


// Gestiona abrir/cerrar de los colapsables 
collapsibleHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.classList.toggle("active");
  });
});

