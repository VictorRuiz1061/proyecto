const inputBuscar = document.getElementById('table-search');  // obtener el elemento de entrada con id 'table-search'
inputBuscar.addEventListener('keyup', function() { // agregar un detector de eventos input = buscar 
  const textoBuscar = inputBuscar.value.toLowerCase();// obtener el texto ingresado convertirlo a minusculas
  const filas = document.querySelectorAll('table tbody tr');// seleccionar todas las filas de la tabla dentro de un elemento tbody que es el cuerpo de la tabla
  filas.forEach(fila => {// recorrer cada fila de la tabla
    const celda = fila.textContent.toLowerCase();// obtener el contenido de texto de la fila actual, convertirlo a minusculas
    fila.style.display = celda.includes(textoBuscar) ? '' : 'none';// se establece display del estilo de la fila Si la fila incluye el texto buscado mostrarla si no ocultarla.
  });
});