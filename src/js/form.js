"use strict";

console.log(">> Ready :)");

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

// Sección de compartir
const downloadButton = document.querySelector(".js-download");
const resetButton = document.querySelector(".js-reset");
const formSubmitButton = document.querySelector(".js-create");

// ------------------------------
// TOGGLE DE COLAPSABLES
// ------------------------------
collapsibleHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    collapsibleHeaders.forEach((otherHeader) => {
      const otherContent = otherHeader.nextElementSibling;
      if (otherHeader !== header) {
        otherHeader.classList.remove("active");
        otherContent.style.maxHeight = null;
        otherContent.classList.remove("open");
      }
    });

    header.classList.toggle("active");

    if (content.classList.contains("open")){
        content.style.maxHeight = null;
        content.classList.remove("open");
    } else {
        content.style.maxHeight = content.scrollHeight + 32 + "px";
        content.classList.add("open");
    }    
  });
});

// ------------------------------
// DATOS DEL FORMULARIO
// ------------------------------
const formData = {
  name: "",
  message: "",
  email: "",
  phone: "",
  date: "",
  address: "",
  photo: "",
  style: "",
  background: "",
};

// ------------------------------
// HANDLERS DE INPUTS
// ------------------------------
const inputMap = {
  name: document.getElementById("name"),
  message: document.getElementById("message"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  date: document.getElementById("date"),
  address: document.getElementById("address"),
  photo: document.getElementById("photo"),
  style: document.getElementById("style"),
};

const backgroundsContainer = document.querySelector(".js-backgrounds");

// ------------------------------
// FONDOS POR ESTILO
// ------------------------------
const backgrounds = {
  boda: ["boda1.jpg", "boda2.jpg", "boda3.jpg"],
  cumple: ["cumple1.jpg", "cumple2.jpg", "cumple3.jpg"],
  networking: ["networking1.jpg", "networking2.jpg", "networking3.jpg"],
};

// ------------------------------
// LISTENER GENÉRICO
// ------------------------------
Object.entries(inputMap).forEach(([key, input]) => {
  const eventType = key === "photo" || key === "style" ? "change" : "input";

  input.addEventListener(eventType, (e) => {
    if (key === "photo") {
      const file = e.target.files[0];
      if (file) formData.photo = URL.createObjectURL(file);
    } else if (key === "style") {
      formData.style = e.target.value;
      updateBackgrounds();
    } else {
      formData[key] = e.target.value;
    }
    emitData();
  });
});

// ------------------------------
// ACTUALIZAR FONDOS
// ------------------------------
function updateBackgrounds() {
  backgroundsContainer.innerHTML = "";
  const images = backgrounds[formData.style] || [];

  images.forEach((img) => {
    const imgElement = document.createElement("img");
    imgElement.src = `./images/${formData.style}/${img}`;
    imgElement.alt = formData.style;
    imgElement.classList.add("background-option");

    imgElement.addEventListener("click", () => {
      formData.background = imgElement.src;
      emitData();
    });

    backgroundsContainer.appendChild(imgElement);
  });
}

// ------------------------------
// EMITIR DATOS A PREVIEW
// ------------------------------
function emitData() {
  document.dispatchEvent(new CustomEvent("formDataUpdated", { detail: formData }));
}
