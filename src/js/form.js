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
const styleSelect = document.getElementById("style");
const backgroundsContainer = document.querySelector(".js-backgrounds");

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

// Fondos disponibles por estilo
const backgrounds = {
  boda: ["boda1.jpg", "boda2.jpg", "boda3.jpg"],
  cumple: ["cumple1.jpg", "cumple2.jpg", "cumple3.jpg"],
  networking: ["networking1.jpg", "networking2.jpg", "networking3.jpg"]
}
styleSelect.addEventListener("change", () => {
  const selectedStyle = styleSelect.value; // boda, baby, cumple, networking
  const images = backgrounds[selectedStyle] || [];

  // limpiar contenedor antes de meter nuevas imágenes
  backgroundsContainer.innerHTML = "";

  // recorrer imágenes y pintarlas
  images.forEach(img => {
    const imgElement = document.createElement("img");
    imgElement.src = `./images/${selectedStyle}/${img}`; // 👈 asegúrate de que la ruta coincide con tu carpeta
    imgElement.alt = selectedStyle;
    imgElement.classList.add("background-option");
    
    imgElement.addEventListener("click", () => {                  //TANIA:he añadido este evento para que el fondo elegido se pinte también en preview
      preview.style.backgroundImage = `url(${imgElement.src})`;
    });

    backgroundsContainer.appendChild(imgElement);
  });
});