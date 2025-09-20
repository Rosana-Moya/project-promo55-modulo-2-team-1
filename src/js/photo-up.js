'use strict'

console.log("ready preview");

const inputImg = document.querySelector(".js_input_file");
const photoUp = document.querySelector(".photo-up");

console.log("inputImg", inputImg);
console.log("photoUp", photoUp);

inputImg.addEventListener("change", (event) =>{
 const file = event.target.files[0];  // Obtén el primer archivo seleccionado
 console.log("Archivo seleccionado:", file);
 if (file) {
    const reader = new FileReader();
     reader.onload = function(e) {
      console.log("Imagen cargada:", e.target.result);
      localStorage.setItem("photoUp", JSON.stringify(e.target.result));
      photoUp.innerHTML = `<img src=${e.target.result} alt="Imagen del usuario/a" class="photo-up__image">`
    };
    
    reader.readAsDataURL(file);  // Lee el archivo como una URL de datos
  }
  })