'use strict'
console.log("ready preview");

const preview = document.querySelector(".preview-container");

const hostName = document.querySelector(".preview-main__host-name");
const message = document.querySelector(".preview-main__message");
const eventDate = document.querySelector(".preview__event-date");
const hostMail = document.querySelector(".preview__mail");
const hostPhone = document.querySelector(".preview__phone");
const hostAddress = document.querySelector(".preview__address");

inputName.addEventListener("input", (event) => {
    hostName.textContent = event.target.value;
})
inputMessage.addEventListener("input", (event) => {
    message.textContent = event.target.value;
})

inputDate.addEventListener("input", (event) => {
    eventDate.textContent = event.target.value;
})
