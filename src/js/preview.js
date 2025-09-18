'use strict'
console.log("ready preview");

const preview = document.querySelector(".preview");
const previewMain = document.querySelector(".preview__main");

//ESCUCHADORAS DE "RELLENA"

const hostName = document.querySelector(".preview-main__host-name");
const message = document.querySelector(".preview-main__message");
const eventDate = document.querySelector(".preview__event-date");
const hostMail = document.querySelector(".preview__mail");
const hostPhone = document.querySelector(".preview__phone");
const hostAddress = document.querySelector(".preview__address");

const fontSlider = document.querySelector(".js-font-size");

inputName.addEventListener("input", (event) => {
    hostName.textContent = event.target.value;
})
inputMessage.addEventListener("input", (event) => {
    message.textContent = event.target.value;
})
inputDate.addEventListener("input", (event) => {
    eventDate.textContent = event.target.value;
})
inputEmail.addEventListener("input", (event) => {
    hostMail.textContent = event.target.value;
})
inputPhone.addEventListener("input", (event) => {
    hostPhone.textContent = event.target.value;
})
inputAddress.addEventListener("input", (event) => {
    hostAddress.textContent = event.target.value;
})

fontSlider.addEventListener("input", () => {
    const newSize = fontSlider.value;
    previewMain.style.fontSize = newSize + "px";
});