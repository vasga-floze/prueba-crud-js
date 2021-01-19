// UI Constructor
export class UI {
    // Add a new Product
    agregarContacto(contacto) {
      const productList = document.getElementById("product-list");
      const element = document.createElement("div");
      element.innerHTML = `
              <div class="card text-center mb-4">
                  <div class="card-body">
                      <strong>Nombre</strong>: ${contacto.nombre} -
                      <strong>Teléfono</strong>: ${contacto.telefono} - 
                      <strong>Correo</strong>: ${contacto.correo}
                      <a href="#" class="btn btn-danger" name="delete">Delete</a>
                  </div>
              </div>
          `;
      productList.appendChild(element);
    }
  
    resetForm() {
      document.getElementById("product-form").reset();
    }
  
    eliminarContacto(element) {
      if (element.name === "delete") {
        element.parentElement.parentElement.remove();
        this.mostrarMensaje("Contacto eliminado", "success");
      }
    }
  
    mostrarMensaje(message, cssClass) {
      const div = document.createElement("div");
      div.className = `alert alert-${cssClass} mt-2`;
      div.appendChild(document.createTextNode(message));
  
      // Mostrar en ek DOM
      const container = document.querySelector(".container");
      const app = document.querySelector("#App");
  
      // Insertar mensaje en la UI
      container.insertBefore(div, app);
  
      // Eliminar mensaje despues de 4 segundos
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 4000);
    }
  }