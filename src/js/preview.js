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
const inputName = document.getElementById("name");   //solo para probar cómo escuchar el form - sin mergear no tengo acceso
const inputDate = document.getElementById("date");
const hostName = document.querySelector(".preview-main__host-name");
const message = document.querySelector(".preview-main__message");
const eventDate = document.querySelector(".preview__event-date");

inputName.addEventListener("input", (event) => {
    hostName.textContent = event.target.value;
})

inputDate.addEventListener("input", (event) => {
    eventDate.textContent = event.target.value;
})
