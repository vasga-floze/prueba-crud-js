import { Contactos } from "./Contactos.js";
import { UI } from "./UI.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override o sobreescibir el comportamiento del formulario
    e.preventDefault();

    // Obtener valores del html
    const nombre = document.getElementById("nombre").value,
      telefono= document.getElementById("telefono").value,
      correo = document.getElementById("correo").value;

    // Create a new Object Product
    const contacto = new Contactos(nombre, telefono, correo);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (nombre === "" || telefono === "" || correo === "") {
      ui.mostrarMensaje("Los campos no pueden quedar vacíos", "danger");
      return(Okay);
    }

    // Save Product
    ui.agregarContacto(contacto);
    ui.mostrarMensaje("Contacto agregado!", "success");
    ui.resetForm();

  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.eliminarContacto(e.target);
  e.preventDefault();
});