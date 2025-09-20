'use strict'
console.log("ready preview");

const preview = document.querySelector(".preview");
const previewMain = document.querySelector(".preview__main");
const previewData = document.querySelector(".preview__data");

//ESCUCHADORAS DE "RELLENA"

const hostName = document.querySelector(".preview-main__host-name");
const message = document.querySelector(".preview-main__message");
const eventDate = document.querySelector(".preview__event-date");
const hostMail = document.querySelector(".preview__mail");
const hostPhone = document.querySelector(".preview__phone");
const hostAddress = document.querySelector(".preview__address");

const fontSlider = document.querySelector(".js-font-size");
const fontFamily = document.querySelector(".js-font");
const fontColor = document.querySelector(".js-font-color");

//CARGA LA PÁGINA CON LOS DATOS ALMACENADOS EN LOCALSTORAGE
//Datos de cliente
inputName.value = localStorage.getItem("hostName");
hostName.textContent = localStorage.getItem("hostName");
inputMessage.value = localStorage.getItem("message");
message.textContent = localStorage.getItem("message");
inputDate.value = localStorage.getItem("eventDate");
eventDate.textContent = localStorage.getItem("eventDate");
inputEmail.value = localStorage.getItem("hostMail");
hostMail.textContent = localStorage.getItem("hostName");
inputPhone.value = localStorage.getItem("hostPhone");
hostPhone.textContent = localStorage.getItem("hostPhone");
inputAddress.value = localStorage.getItem ("hostAddress");
hostAddress.textContent = localStorage.getItem ("hostAddress");

//Datos de Diseño
previewMain.style.fontSize = localStorage.getItem("fontSize");
preview.style.fontFamily = localStorage.getItem("fontFamily");
preview.style.color = localStorage.getItem("fontColor");
preview.style.backgroundImage = localStorage.getItem("selectedBackground");
const savedPhoto = JSON.parse(localStorage.getItem("photoUp"));
const renderPhoto = () => {
    if (savedPhoto) {
        photoUp.innerHTML = `<img src=${savedPhoto} alt="Imagen del usuario/a" class="photo-up__image">`
    }
};
renderPhoto();

inputName.addEventListener("input", (event) => {
    hostName.textContent = event.target.value;
    localStorage.setItem("hostName", event.target.value);
})
inputMessage.addEventListener("input", (event) => {
    message.textContent = event.target.value;
    localStorage.setItem("message", event.target.value);
})
inputDate.addEventListener("input", (event) => {
    eventDate.textContent = event.target.value;
    localStorage.setItem("eventDate", event.target.value);
})
inputEmail.addEventListener("input", (event) => {
    hostMail.textContent = event.target.value;
    localStorage.setItem("hostMail", event.target.value);
})
inputPhone.addEventListener("input", (event) => {
    hostPhone.textContent = event.target.value;
    localStorage.setItem("hostPhone", event.target.value);
})
inputAddress.addEventListener("input", (event) => {
    hostAddress.textContent = event.target.value;
    localStorage.setItem("hostAddress", event.target.value);
})

fontSlider.addEventListener("input", () => {
    const newSize = fontSlider.value;
    previewMain.style.fontSize = newSize + "px";
    localStorage.setItem("fontSize", newSize + "px");
});

fontFamily.addEventListener("change", (event) => {
    const selectedFont = event.target.value;
    preview.style.fontFamily = selectedFont;
    localStorage.setItem("fontFamily", event.target.value);
});

fontColor.addEventListener("input", (event) => {
    const newColor = event.target.value;
    preview.style.color = newColor;
    localStorage.setItem("fontColor", newColor);
})

document.addEventListener("formDataUpdated", (backgroundImage) => {
  const data = backgroundImage.detail;
  if (data.background) {
    preview.style.backgroundImage = `url("${data.background}")`;
    localStorage.setItem("selectedBackground", preview.style.backgroundImage);
  };
  });

