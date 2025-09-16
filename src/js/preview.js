'use strict'
console.log("ready preview");

const preview = document.querySelector(".preview-container");
const design = document.querySelector(".preview__chosen-style");

const designClasses = ["autum", "minimal", "minimalSerius", "fun"];

design.addEventListener ("change", (event) => {
    const selectDesign = event.target.value;
    preview.classList.remove(...designClasses);
    switch (selectDesign) {
        case "autum": preview.classList.add ("autum");
        break;
        case "minimal": preview.classList.add ("minimal");
        break;
        case "fun": preview.classList.add ("fun");
        break;

    }
})
const inputName = document.querySelector(".form__input");   //solo para probar cómo escuchar el form - sin mergear no tengo acceso
const hostName = document.querySelector(".preview__host-name");
const eventDate = document.querySelector(".preview__event-day");
const message = document.querySelector(".preview__message");

console.log(inputName);
console.log(hostName);

inputName.addEventListener("input", (event) => {
    hostName.textContent = event.target.value;
})
