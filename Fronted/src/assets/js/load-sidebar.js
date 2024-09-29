// load-sidebar.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("../components/sidebar.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      // Crear un elemento div temporal
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;

      // Extraer el contenido del aside
      const sidebarContent = tempDiv.querySelector("aside,header");

      if (sidebarContent) {
        document.body.insertAdjacentHTML("afterbegin", sidebarContent.outerHTML);

        // Cargar el script del sidebar
        const script = document.createElement("script");
        script.src = "../components/sidebar.js";
        document.head.appendChild(script);
      } else {
        console.error("No se encontró el elemento aside en sidebar.html");
      }
    })
    .catch((error) => console.error("Error al cargar el sidebar:", error));
}); 
