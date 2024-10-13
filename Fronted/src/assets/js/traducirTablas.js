document.getElementById("boton-idioma").addEventListener("click", function () {
  const esEnIngles = document.getElementById("boton-idioma").innerText === "Cambiar a Inglés";

  // Traducción al inglés
  if (esEnIngles) {
    // Cambiar encabezados de la tabla
    const tableHeaders = document.querySelectorAll("thead th");
    tableHeaders[1].innerText = "ID MATERIAL";
    tableHeaders[2].innerText = "SENA CODE";
    tableHeaders[3].innerText = "QNPSC CODE";
    tableHeaders[4].innerText = "MATERIAL NAME";
    tableHeaders[5].innerText = "QUANTITY";
    tableHeaders[6].innerText = "ARRIVAL DATE";
    tableHeaders[7].innerText = "MEASUREMENT UNITS";
    tableHeaders[8].innerText = "EXPIRATION DATE";
    tableHeaders[9].innerText = "DESCRIPTION";
    tableHeaders[10].innerText = "MATERIAL STATUS";
    tableHeaders[11].innerText = "AREAS";
    tableHeaders[12].innerText = "REGISTER";
    tableHeaders[13].innerText = "ACTION";

    // Cambiar las celdas de las filas
    const rows = document.querySelectorAll("tbody tr");
    rows[0].cells[4].innerText = "Material A"; // Nombre del material
    rows[0].cells[5].innerText = "10"; // Cantidad
    rows[0].cells[6].innerText = "2024-01-01"; // Fecha de llegada
    rows[0].cells[7].innerText = "Kilograms"; // Unidades de medida
    rows[0].cells[8].innerText = "2025-01-01"; // Fecha de vencimiento
    rows[0].cells[9].innerText = "Description of Material A"; // Descripción
    rows[0].cells[10].innerText = "Available"; // Estado del material
    rows[0].cells[11].innerText = "Area 1"; // Área
    rows[0].cells[13].children[0].innerText = "Edit"; // Enlace de editar
    rows[0].cells[13].children[1].innerText = "Delete"; // Botón de borrar

    rows[1].cells[4].innerText = "Material B";
    rows[1].cells[5].innerText = "20";
    rows[1].cells[6].innerText = "2024-02-01";
    rows[1].cells[7].innerText = "Liters";
    rows[1].cells[8].innerText = "2026-02-01";
    rows[1].cells[9].innerText = "Description of Material B";
    rows[1].cells[10].innerText = "Not Available";
    rows[1].cells[11].innerText = "Area 2";
    rows[1].cells[13].children[0].innerText = "Edit";
    rows[1].cells[13].children[1].innerText = "Delete";

    document.getElementById("boton-idioma").innerText = "Cambiar a Español"; // Cambiar el texto del botón
  } else {
    // Revertir a español
    const tableHeaders = document.querySelectorAll("thead th");
    tableHeaders[1].innerText = "ID MATERIAL";
    tableHeaders[2].innerText = "CÓDIGO SENA";
    tableHeaders[3].innerText = "CÓDIGO QNPSC";
    tableHeaders[4].innerText = "NOMBRE MATERIAL";
    tableHeaders[5].innerText = "CANTIDAD";
    tableHeaders[6].innerText = "FECHA LLEGADA";
    tableHeaders[7].innerText = "UNIDADES DE MEDIDA";
    tableHeaders[8].innerText = "FECHA DE VENCIMIENTO";
    tableHeaders[9].innerText = "DESCRIPCIÓN";
    tableHeaders[10].innerText = "ESTADO MATERIAL";
    tableHeaders[11].innerText = "ÁREAS";
    tableHeaders[12].innerText = "REGISTRO";
    tableHeaders[13].innerText = "ACCIÓN";

    // Revertir las celdas de las filas
    const rows = document.querySelectorAll("tbody tr");
    rows[0].cells[4].innerText = "Material A";
    rows[0].cells[5].innerText = "10";
    rows[0].cells[6].innerText = "2024-01-01";
    rows[0].cells[7].innerText = "Kilogramos";
    rows[0].cells[8].innerText = "2025-01-01";
    rows[0].cells[9].innerText = "Descripción del Material A";
    rows[0].cells[10].innerText = "Disponible";
    rows[0].cells[11].innerText = "Área 1";
    rows[0].cells[13].children[0].innerText = "Editar";
    rows[0].cells[13].children[1].innerText = "Borrar";

    rows[1].cells[4].innerText = "Material B";
    rows[1].cells[5].innerText = "20";
    rows[1].cells[6].innerText = "2024-02-01";
    rows[1].cells[7].innerText = "Litros";
    rows[1].cells[8].innerText = "2026-02-01";
    rows[1].cells[9].innerText = "Descripción del Material B";
    rows[1].cells[10].innerText = "No Disponible";
    rows[1].cells[11].innerText = "Área 2";
    rows[1].cells[13].children[0].innerText = "Editar";
    rows[1].cells[13].children[1].innerText = "Borrar";

    document.getElementById("boton-idioma").innerText = "Cambiar a Inglés"; // Cambiar el texto del botón
  }
});
