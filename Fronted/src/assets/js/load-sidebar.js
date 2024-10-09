//load-sidebar.js
document.addEventListener("DOMContentLoaded", function () {
  // Cargar el Sidebar
  fetch("../components/sidebar.html")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.text();
    })
    .then((data) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;
      const sidebarContent = tempDiv.querySelector("aside");

      if (sidebarContent) {
        document.body.insertAdjacentHTML("afterbegin", sidebarContent.outerHTML);

        // Cargar el script del sidebar
        const script = document.createElement("script");
        script.src = "../components/sidebar.js"; // Asegúrate de que la ruta sea correcta
        document.head.appendChild(script);
      } else {
        console.error("No se encontró el elemento <aside> en sidebar.html");
      }
    })
    .catch((error) => console.error("Error al cargar el sidebar:", error));

  // Cargar el Header
  fetch("../components/header.html")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.text();
    })
    .then((data) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;
      const headerContent = tempDiv.querySelector("header");

      if (headerContent) {
        document.body.insertAdjacentHTML("afterbegin", headerContent.outerHTML);
      } else {
        console.error("No se encontró el elemento <header> en header.html");
      }
    })
    .catch((error) => console.error("Error al cargar el header:", error));
});

