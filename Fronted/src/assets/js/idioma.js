//barra de navegación
const botonIdioma = document.getElementById('boton-idioma');
const titulo = document.getElementById('titulo');
const administrador = document.getElementById('administrador');
const usuario = document.getElementById('Usuario');
const menu = document.getElementById('menu');
const Materiales = document.getElementById('Materiales');
const RegistrarMateriales = document.getElementById('RegistrarMateriales');
const ConsultarMateriales = document.getElementById('ConsultarMateriales');
const Bodegas = document.getElementById('Bodegas');
const RegistarBodega = document.getElementById('RegistarBodega');
const prestamos = document.getElementById('prestamos');
const enlacePrestamos = prestamos.querySelector(' a');
const Devoluciones = document.querySelector('#Devoluciones a');
const agregarSolicitud = document.querySelector('#agregarSolicitud');
const agregarPrestamo = document.querySelector('#agregarPrestamo');
const elementosDisponibles = document.querySelector('#elementosDisponibles');
const provedores = document.querySelector('#provedores');
//contenido
const verReportes = document.querySelector('#verReportes');
const Configuración = document.querySelector('#Configuración');
const ayuda = document.querySelector('#ayuda');
const buscar = document.querySelector('#buscar');
const bodegas = document.querySelector('#bodegas');
const materiales = document.querySelector('#materiales');
const ElementosDisponibles = document.querySelector('#ElementosDisponibles');
const usuarios = document.querySelector('#usuarios');
const registro_Elementos = document.querySelector('#registro_Elementos');
const Prestamos = document.querySelector('#Prestamos');



const idiomas = {
  // barra de navegación
  español: {
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
    verReportes: 'Ver Reportes',
    Configuración: 'Configuración',
    ayuda: 'Ayuda',
    buscar: 'Buscar...',
    bodegas: 'bodegas',
    materiales: 'materiales',
    ElementosDisponibles: 'Elementos Disponibles',
    usuarios: 'usuarios',
    registro_Elementos: 'Registro de elementos',
    Prestamos: 'Prestamos',
  },
  inglés: {
    // barra de navegación
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
    // Contenido
    verReportes: 'View Reports', 
    Configuración: 'Settings', 
    ayuda: 'Help', 
    buscar: 'Search...', 
    bodegas: 'Warehouses', 
    materiales: 'Materials', 
    ElementosDisponibles: 'Available Items', 
    usuarios: 'Users', 
    registro_Elementos: 'Elements register', 
    Prestamos: 'Loans', 
  },
};
let idiomaActual = 'español';
botonIdioma.addEventListener('click', () => {
    idiomaActual = idiomaActual === 'español' ? 'inglés' : 'español';
    
    // Actualizar el contenido del botón y los elementos de texto barra de navegación
    botonIdioma.textContent = idiomas[idiomaActual].boton;
    titulo.textContent = idiomas[idiomaActual].prestamos;
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
    //contenido
    verReportes.textContent = idiomas[idiomaActual].verReportes;
    Configuración.textContent = idiomas[idiomaActual].Configuración;
    ayuda.textContent = idiomas[idiomaActual].ayuda;
    buscar.placeholder = idiomas[idiomaActual].buscar;
    bodegas.textContent = idiomas[idiomaActual].bodegas;
    materiales.textContent = idiomas[idiomaActual].materiales;
    ElementosDisponibles.textContent = idiomas[idiomaActual].ElementosDisponibles;
    usuarios.textContent = idiomas[idiomaActual].usuarios;
    registro_Elementos.textContent = idiomas[idiomaActual].registro_Elementos;
    Prestamos.textContent = idiomas[idiomaActual].Prestamos;

    
});
