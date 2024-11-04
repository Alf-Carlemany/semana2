// botonVolver.js
document.addEventListener("DOMContentLoaded", function () {
    // Crear el botón
    const boton = document.createElement("a");
    boton.href = "../index.html";
    boton.className = "btn btn-primary btn-back mt-4";
    boton.textContent = "Volver al Inicio";
  
    // Crear un contenedor para centrar el botón
    const contenedor = document.createElement("div");
    contenedor.className = "d-flex justify-content-center my-4";
    contenedor.appendChild(boton);
  
    // Añadir el botón al final del body
    document.body.appendChild(contenedor);
  });
  