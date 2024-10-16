document.getElementById("boton-idioma").addEventListener("click", function () {
  const esEnIngles = document.getElementById("boton-idioma").innerText === "Cambiar a Inglés";

  // Traducción al inglés
  if (esEnIngles) {
    // Traducción del menú lateral
    document.getElementById("Usuario").innerText = "User";
    document.getElementById("Materiales").innerText = "Materials";
    document.getElementById("RegistrarMateriales").innerText = "Register Materials";
    document.getElementById("ConsultarMateriales").innerText = "Consult Materials";
    document.getElementById("Bodegas").innerText = "Warehouses";
    document.getElementById("RegistarBodega").innerText = "Register Warehouse";
    document.getElementById("prestamos").innerText = "Loans";
    document.getElementById("Devoluciones").innerText = "Returns";
    document.getElementById("elementosDisponibles").innerText = "Available Items";
    document.getElementById("provedores").innerText = "Suppliers";
    document.getElementById("agregarSolicitud").innerText = "Add Request";
    document.getElementById("agregarPrestamo").innerText = "Add Loan";

    // Traducción del header
    document.getElementById("Menu").innerText = "Menu";
    document.getElementById("Usuarios").innerText = "Users";
    document.getElementById("Administrador").innerText = "Administrator";

    // Traducción de la tabla y dropdown
    document.getElementById("dropdownRadioButton").innerText = "Last 30 days";
    document.getElementById("filter-radio-1").nextElementSibling.innerText = "Last day";
    document.getElementById("filter-radio-2").nextElementSibling.innerText = "Last 7 days";
    document.getElementById("filter-radio-3").nextElementSibling.innerText = "Last 30 days";
    document.getElementById("filter-radio-4").nextElementSibling.innerText = "Last month";
    document.getElementById("filter-radio-5").nextElementSibling.innerText = "Last year";

    document.getElementById("table-search").placeholder = "Search for users";

    const tableHeaders = document.querySelectorAll("th");
    tableHeaders[1].innerText = "ID Number";
    tableHeaders[2].innerText = "Full Name";
    tableHeaders[3].innerText = "Role";
    tableHeaders[4].innerText = "Email Address";
    tableHeaders[5].innerText = "Action";

    const rows = document.querySelectorAll("tbody tr");
    rows[0].cells[2].innerText = "Juan Pérez"; // Nombre Completo
    rows[0].cells[3].innerText = "Administrator"; // Rol
    rows[0].cells[4].innerText = "juan.perez@example.com"; // Correo Electrónico
    rows[0].cells[5].children[0].innerText = "Edit"; // Editar
    rows[0].cells[5].children[1].innerText = "Delete"; // Borrar

    rows[1].cells[2].innerText = "María López";
    rows[1].cells[3].innerText = "User";
    rows[1].cells[4].innerText = "maria.lopez@example.com";
    rows[1].cells[5].children[0].innerText = "Edit";
    rows[1].cells[5].children[1].innerText = "Delete";

    // Traducción del modal
    document.querySelector("#userModal h2").innerText = "Register User";
    document.querySelector("label[for='id_numero']").innerText = "ID Number";
    document.querySelector("label[for='nombre_completo']").innerText = "Full Name";
    document.querySelector("label[for='rol']").innerText = "Role";
    document.querySelector("label[for='password']").innerText = "Password";
    document.querySelector("label[for='correo']").innerText = "Email";
    document.querySelector("#userModal button[type='submit']").innerText = "Register";

    // Cambiar el texto del botón de idioma
    document.getElementById("boton-idioma").innerText = "Cambiar a Español";
  } else {
    // Revertir a español
    document.getElementById("Usuario").innerText = "Usuario";
    document.getElementById("Materiales").innerText = "Materiales";
    document.getElementById("RegistrarMateriales").innerText = "Registrar materiales";
    document.getElementById("ConsultarMateriales").innerText = "Consultar materiales";
    document.getElementById("Bodegas").innerText = "Bodegas";
    document.getElementById("RegistarBodega").innerText = "Registrar bodega";
    document.getElementById("prestamos").innerText = "Préstamos";
    document.getElementById("Devoluciones").innerText = "Devoluciones";
    document.getElementById("elementosDisponibles").innerText = "Elementos disponibles";
    document.getElementById("provedores").innerText = "Proveedores";
    document.getElementById("agregarSolicitud").innerText = "Agregar solicitud";
    document.getElementById("agregarPrestamo").innerText = "Agregar préstamo";

    // Revertir el header
    document.getElementById("Menu").innerText = "Menú";
    document.getElementById("Usuarios").innerText = "Usuarios";
    document.getElementById("Administrador").innerText = "Administrador";

    // Revertir la tabla y dropdown
    document.getElementById("dropdownRadioButton").innerText = "Últimos 30 días";
    document.getElementById("filter-radio-1").nextElementSibling.innerText = "Último día";
    document.getElementById("filter-radio-2").nextElementSibling.innerText = "Últimos 7 días";
    document.getElementById("filter-radio-3").nextElementSibling.innerText = "Últimos 30 días";
    document.getElementById("filter-radio-4").nextElementSibling.innerText = "Último mes";
    document.getElementById("filter-radio-5").nextElementSibling.innerText = "Último año";

    document.getElementById("table-search").placeholder = "Buscar usuarios";

    const tableHeaders = document.querySelectorAll("th");
    tableHeaders[1].innerText = "ID Número";
    tableHeaders[2].innerText = "Nombre Completo";
    tableHeaders[3].innerText = "Rol";
    tableHeaders[4].innerText = "Correo Electrónico";
    tableHeaders[5].innerText = "Acción";

    const rows = document.querySelectorAll("tbody tr");
    rows[0].cells[2].innerText = "Juan Pérez";
    rows[0].cells[3].innerText = "Administrador";
    rows[0].cells[4].innerText = "juan.perez@example.com";
    rows[0].cells[5].children[0].innerText = "Editar";
    rows[0].cells[5].children[1].innerText = "Borrar";

    rows[1].cells[2].innerText = "María López";
    rows[1].cells[3].innerText = "Usuario";
    rows[1].cells[4].innerText = "maria.lopez@example.com";
    rows[1].cells[5].children[0].innerText = "Editar";
    rows[1].cells[5].children[1].innerText = "Borrar";

    // Revertir el modal
    document.querySelector("#userModal h2").innerText = "Registrar Usuario";
    document.querySelector("label[for='id_numero']").innerText = "ID Número";
    document.querySelector("label[for='nombre_completo']").innerText = "Nombre Completo";
    document.querySelector("label[for='rol']").innerText = "Rol";
    document.querySelector("label[for='password']").innerText = "Contraseña";
    document.querySelector("label[for='correo']").innerText = "Correo";
    document.querySelector("#userModal button[type='submit']").innerText = "Registrar";

    // Cambiar el texto del botón de idioma
    document.getElementById("boton-idioma").innerText = "Cambiar a Inglés";
  }
});
