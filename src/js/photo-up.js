'use strict'

console.log("ready preview");

const inputImg = document.querySelector(".js_input_file");
const photoUp = document.querySelector(".photo-up__image");

inputImg.addEventListener("change", (event) =>{
 const file = event.target.files[0];  // Obtén el primer archivo seleccionado
  if (file) {
    const reader = new FileReader();
     reader.onload = function(e) {
      // Establece la imagen como la fuente del <img>
      photoUp.src = e.target.result;
      photoUp.style.display = 'block';  // Muestra la imagen en el preview
    };
    
    reader.readAsDataURL(file);  // Lee el archivo como una URL de datos
  }
  })