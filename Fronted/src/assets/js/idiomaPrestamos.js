// barra de navegación
const botonIdioma = document.getElementById('boton-idioma');
const titulo_inicio = document.getElementById('titulo_prestamos');
const administrador = document.getElementById('administrador');
const usuario = document.getElementById('Usuario');
const menu = document.getElementById('menu');
const Materiales = document.getElementById('Materiales');
const RegistrarMateriales = document.getElementById('RegistrarMateriales');
const ConsultarMateriales = document.getElementById('ConsultarMateriales');
const Bodegas = document.getElementById('Bodegas');
const RegistarBodega = document.getElementById('RegistarBodega');
const prestamos = document.getElementById('prestamos');
const enlacePrestamos = prestamos.querySelector('a');
const Devoluciones = document.querySelector('#Devoluciones a');
const agregarSolicitud = document.querySelector('#agregarSolicitud');
const agregarPrestamo = document.querySelector('#agregarPrestamo');
const elementosDisponibles = document.querySelector('#elementosDisponibles');
const provedores = document.querySelector('#provedores');
// contenido
const buscar = document.querySelector('#table-search');

// Botones
const consultarMaterialesBtn = document.querySelector('#consultar-materiales-btn');
const elementosDisponiblesBtn = document.querySelector('#elementos-disponibles-btn');
const agregarPrestamoBtn = document.querySelector('#agregar-prestamo-btn');

// idiomas
const idiomas = {
  español: {
    // barra de navegación
    titulo_inicio: 'Préstamos',
    prestamos: 'Préstamos',
    administrador: 'Administrador',
    usuario: 'Usuario',
    menu: 'Menú',
    Materiales: 'Materiales',
    RegistrarMateriales: 'Registrar Materiales',
    ConsultarMateriales: 'Consultar Materiales',
    Bodegas: 'Bodegas',
    RegistarBodega: 'Registrar Bodega',
    Devoluciones: 'Devoluciones',
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
    estadoPrestamos: 'Estado',
    ProovedorPrestamos: 'Proveedor',
    fechaPrestamos: 'Fecha',
    acciones: 'Acción'
  },
  inglés: {
    // barra de navegación
    titulo_inicio: 'Loans',
    prestamos: 'Loans',
    administrador: 'Administrator',
    usuario: 'User',
    menu: 'Menu',
    Materiales: 'Materials',
    RegistrarMateriales: 'Register Materials',
    ConsultarMateriales: 'Consult Materials',
    Bodegas: 'Warehouses',
    RegistarBodega: 'Register Warehouse',
    Devoluciones: 'Returns',
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
    estadoPrestamos: 'Status',
    ProovedorPrestamos: 'Provider',
    fechaPrestamos: 'Date',
    acciones: 'Action'
  }
};

let idiomaActual = 'español';

botonIdioma.addEventListener('click', () => {
  idiomaActual = idiomaActual === 'español' ? 'inglés' : 'español';

  // Actualizar el contenido del botón y los elementos de texto en la barra de navegación
  botonIdioma.textContent = idiomas[idiomaActual].boton;
  titulo_inicio.textContent = idiomas[idiomaActual].titulo_inicio;
  administrador.textContent = idiomas[idiomaActual].administrador;
  usuario.textContent = idiomas[idiomaActual].usuario;
  menu.textContent = idiomas[idiomaActual].menu;
  Materiales.textContent = idiomas[idiomaActual].Materiales;
  RegistrarMateriales.textContent = idiomas[idiomaActual].RegistrarMateriales;
  ConsultarMateriales.textContent = idiomas[idiomaActual].ConsultarMateriales;
  Bodegas.textContent = idiomas[idiomaActual].Bodegas;
  RegistarBodega.textContent = idiomas[idiomaActual].RegistarBodega;
  prestamos.textContent = idiomas[idiomaActual].prestamos;
  enlacePrestamos.textContent = idiomas[idiomaActual].prestamos;
  Devoluciones.textContent = idiomas[idiomaActual].Devoluciones;
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

  // Actualizar texto de los botones
  consultarMaterialesBtn.textContent = idiomas[idiomaActual].ConsultarMateriales;
  elementosDisponiblesBtn.textContent = idiomas[idiomaActual].elementosDisponibles;
  agregarPrestamoBtn.textContent = idiomas[idiomaActual].agregarPrestamo;
});
