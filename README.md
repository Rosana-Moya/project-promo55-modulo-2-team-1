# Invite Me Project 🚀

![Logo Invite Me](./public/images/favicon_inviteme2.png)

## Descripción

**Invite Me** es una aplicación web interactiva diseñada para permitir a los usuarios crear, visualizar y gestionar información en tiempo real 📝.  
La app incluye un formulario dinámico, una vista previa instantánea, almacenamiento de datos en el navegador y la opción de descargar la información 💾.  
El proyecto se ha desarrollado utilizando **HTML**, **SCSS (modular con partials)** y **JavaScript modular**, con **Vite** como entorno de desarrollo.

El proyecto sigue un enfoque **modular y escalable**, utilizando partials para layout y componentes, y archivos JS separados para cada funcionalidad.

---

## Tecnologías utilizadas

- HTML5 semántico 🏷️
- SCSS modular (partials para layout y componentes) 🎨
- JavaScript modular (ES6 imports/exports) 💻
- Vite como bundler y entorno de desarrollo ⚡
- Responsive design con media queries 📱
- LocalStorage para persistencia de datos 💾

---

## Funcionalidades principales

- Formulario interactivo con inputs en tiempo real 🎉  
- Vista previa instantánea que refleja los datos del formulario 👀  
- Secciones colapsables para mejorar la UX 🐱‍💻  
- Validaciones de campos con feedback visual ✅  
- Persistencia de datos usando LocalStorage 💾  
- Opción de descargar los datos del usuario 📦  
- Diseño responsive y accesible 💡

---

## Roles del equipo y contribuciones por sprint 

### Sprint 1 – Maquetación 

- **Michelle**: layout/_header.scss + HTML del header + preparar header.js si hace falta  
- **Karen**: components/_form.scss + HTML del formulario + form.js (eventos básicos de inputs) 
- **Tania**: components/_preview.scss + HTML de la preview + preview.js  
- **Rosana**: layout/_footer.scss + HTML del footer + main.js (montar imports y probar que todo compile) 
- **Objetivo:** Crear la estructura básica de la app, con landing, formulario y preview estática.

--- 

### Sprint 2 – Interactividad - 

- **Michelle**: collapsables.js (abrir/cerrar secciones) + estilos dinámicos asociados 
- **Karen**: form.js (capturar inputs) → emitir datos al preview.js 
- **Tania**: preview.js (escuchar datos del form y renderizar) 
- **Rosana**: validations.js (validar campos) + feedback visual con CSS 

- **Objetivo:** Hacer la app interactiva con inputs dinámicos, preview en tiempo real, secciones colapsables y validaciones. 

---

### Sprint 3 – Storage 

- **Michelle**: storage.js (guardar en localStorage con setItem) 
- **Karen**: storage.js (recuperar con getItem) 
- **Tania**: form.js (añadir reset que limpie storage) 
- **Rosana**: download.js (botón de descarga de datos) 

- **Objetivo:** Persistir los datos en el navegador, permitir reiniciar el formulario y descargar la información. 

--- 

### Sprint 4 – Demo final 

- **Michelle**: Revisar partials de layout (responsivo) 
- **Karen**: Revisar partials de components (accesibilidad) 
- **Tania**: Refactorizar funciones JS en sus módulos (más limpias, comentarios) 
- **Rosana**: QA: pruebas + preparar presentación (sin dejar de tocar código, ej. HTML accesible) 
- **Objetivo:** Pulir diseño, accesibilidad y funcionalidad, dejando la app lista para la demo. 

--- 

## Funcionalidades principales 

- Formulario interactivo con inputs en tiempo real 
- Vista previa instantánea que refleja los datos del formulario 
- Secciones colapsables para mejorar la UX 
- Validaciones de campos con feedback visual 
- Persistencia de datos usando LocalStorage 
- Opción de descargar los datos del usuario 
- Diseño responsive y accesible 

--- 

## Equipo 
- Michelle – Layout, collapsables, storage 
- Karen – Formulario, accesibilidad, captura de inputs 
- Tania – Preview, refactor JS, reset de storage 
- Rosana – Footer, QA, validaciones, descarga de datos