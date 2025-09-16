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