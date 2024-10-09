// barra de navegación
const botonIdioma = document.getElementById('boton-idioma');
const titulo_devoluciones = document.getElementById('titulo_devoluciones');
const administrador = document.getElementById('administrador');
const usuario = document.getElementById('Usuario');
const menu = document.getElementById('menu');
const materialesLink = document.getElementById('materiales');
const materialesNav = document.getElementById('Materiales_nav'); // Nueva constante
const registrarMateriales = document.getElementById('RegistrarMateriales');
const consultarMateriales = document.getElementById('ConsultarMateriales');
const bodegas = document.getElementById('Bodegas');
const registrarBodega = document.getElementById('RegistarBodega');
const prestamos = document.getElementById('prestamos');
const enlacePrestamos = prestamos.querySelector('a');
const devoluciones = document.querySelector('#Devoluciones a');
const agregarSolicitud = document.querySelector('#agregarSolicitud');
const agregarPrestamo = document.querySelector('#agregarPrestamo');
const elementosDisponibles = document.querySelector('#elementosDisponibles');
const provedores = document.querySelector('#provedores');
const agregarDevolucionBtn = document.getElementById('agregarDevolucion');
// contenido
const buscar = document.querySelector('#table-search');

// idiomas
const idiomas = {
  español: {
    // barra de navegación
    titulo_devoluciones: 'Devoluciones',
    prestamos: 'Préstamos',
    administrador: 'Administrador',
    usuario: 'Usuario',
    menu: 'Menú',
    materiales: 'Materiales',
    materialesNav: 'Materiales', // Nueva traducción
    registrarMateriales: 'Registrar Materiales',
    consultarMateriales: 'Consultar Materiales',
    bodegas: 'Bodegas',
    registrarBodega: 'Registrar Bodega',
    devoluciones: 'Devoluciones',
    agregarSolicitud: 'Agregar Solicitud',
    agregarPrestamo: 'Agregar Préstamo',
    elementosDisponibles: 'Elementos Disponibles',
    provedores: 'Proveedores',
    boton: 'Español',
    // contenido
    buscar: 'Buscar...',
    // encabezados de la tabla
    id_prestamos: 'ID',
    nombrePrestamos: 'Nombre',
    areaPrestamos: 'Área',
    cantidad: 'Cantidad',
    estadoPrestamos: 'Estado',
    fechaEntrega: 'Fecha de entrega',
    fechaDevolucion: 'Fecha de devolución',
    proveedorPrestamos: 'Proveedor',
    acciones: 'Acción',
    agregarDevolucion: '+ Agregar Devolución'
  },
  inglés: {
    // barra de navegación
    titulo_devoluciones: 'Returns',
    prestamos: 'Loans',
    administrador: 'Administrator',
    usuario: 'User',
    menu: 'Menu',
    materiales: 'Materials',
    materialesNav: 'Materials', // Nueva traducción
    registrarMateriales: 'Register Materials',
    consultarMateriales: 'Consult Materials',
    bodegas: 'Warehouses',
    registrarBodega: 'Register Warehouse',
    devoluciones: 'Returns',
    agregarSolicitud: 'Add Request',
    agregarPrestamo: 'Add Loan',
    elementosDisponibles: 'Available Items',
    provedores: 'Providers',
    boton: 'English',
    // contenido
    buscar: 'Search...',
    // encabezados de la tabla
    id_prestamos: 'ID',
    nombrePrestamos: 'Name',
    areaPrestamos: 'Area',
    cantidad: 'Quantity',
    estadoPrestamos: 'Status',
    fechaEntrega: 'Delivery Date',
    fechaDevolucion: 'Return Date',
    proveedorPrestamos: 'Provider',
    acciones: 'Action',
    agregarDevolucion: '+ Add Return'
  }
};

let idiomaActual = 'español';

botonIdioma.addEventListener('click', () => {
  idiomaActual = idiomaActual === 'español' ? 'inglés' : 'español';

  // Actualizar el contenido del botón y los elementos de texto en la barra de navegación
  botonIdioma.textContent = idiomas[idiomaActual].boton;
  titulo_devoluciones.textContent = idiomas[idiomaActual].titulo_devoluciones;
  administrador.textContent = idiomas[idiomaActual].administrador;
  usuario.textContent = idiomas[idiomaActual].usuario;
  menu.textContent = idiomas[idiomaActual].menu;
  materialesLink.textContent = idiomas[idiomaActual].materiales;
  materialesNav.textContent = idiomas[idiomaActual].materialesNav; // Actualizar nuevo elemento
  registrarMateriales.textContent = idiomas[idiomaActual].registrarMateriales;
  consultarMateriales.textContent = idiomas[idiomaActual].consultarMateriales;
  bodegas.textContent = idiomas[idiomaActual].bodegas;
  registrarBodega.textContent = idiomas[idiomaActual].registrarBodega;
  prestamos.textContent = idiomas[idiomaActual].prestamos;
  enlacePrestamos.textContent = idiomas[idiomaActual].prestamos;
  devoluciones.textContent = idiomas[idiomaActual].devoluciones;
  agregarSolicitud.textContent = idiomas[idiomaActual].agregarSolicitud;
  agregarPrestamo.textContent = idiomas[idiomaActual].agregarPrestamo;
  elementosDisponibles.textContent = idiomas[idiomaActual].elementosDisponibles;
  provedores.textContent = idiomas[idiomaActual].provedores;

  // contenido
  buscar.placeholder = idiomas[idiomaActual].buscar;

  // Actualizar encabezados de la tabla
  const encabezados = document.querySelectorAll('th');
  encabezados.forEach(encabezado => {
    const id = encabezado.id;
    encabezado.textContent = idiomas[idiomaActual][id];
  });

  // Actualizar texto del botón de agregar devolución
  agregarDevolucionBtn.textContent = idiomas[idiomaActual].agregarDevolucion;
});
