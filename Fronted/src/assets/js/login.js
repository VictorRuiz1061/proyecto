// Elementos del DOM
const toggleLanguageButton = document.getElementById('toggleLanguage');
const usernameLabel = document.getElementById('usernameLabel');
const passwordLabel = document.getElementById('passwordLabel');
const loginButton = document.getElementById('loginButton');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const loginTitle = document.getElementById('loginTitle');

// Traducciones
const translations = {
    es: {
        toggleLanguage: 'English',
        username: 'Usuario:',
        password: 'Contraseña:',
        login: 'Iniciar Sesión',
        forgotPassword: '¿Olvidaste tu contraseña?',
        loginTitle: 'Iniciar Sesión',
    },
    en: {
        toggleLanguage: 'Español',
        username: 'Username:',
        password: 'Password:',
        login: 'Login',
        forgotPassword: 'Forgot your password?',
        loginTitle: 'Login',
    }
};

// Función para actualizar el idioma
function updateLanguage(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;
    toggleLanguageButton.textContent = t.toggleLanguage;
    usernameLabel.textContent = t.username;
    passwordLabel.textContent = t.password;
    loginButton.textContent = t.login;
    forgotPasswordLink.textContent = t.forgotPassword;
    loginTitle.textContent = t.loginTitle;
    
    localStorage.setItem('language', lang);
}

// Event listener para el botón de cambio de idioma
toggleLanguageButton.addEventListener('click', () => {
    const newLang = document.documentElement.lang === 'es' ? 'en' : 'es';
    updateLanguage(newLang);
});

// Inicializar el idioma basado en localStorage o por defecto en español
const savedLanguage = localStorage.getItem('language') || 'es';
updateLanguage(savedLanguage);

// Función para cambiar aleatoriamente el fondo cada 3 segundos
function changeBackground() {
    const backgroundImages = [
        '/Fronted/public/img/gran-almacen-luz-brillante-que-entra-puerta.jpg',
        '/Fronted/public/img/vista-almacen-completo-carretilla-elevadora.jpg',
        '/Fronted/public/img/cerrar-vista-almacen.jpg',
    ];
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = `url(${backgroundImages[randomIndex]})`;
}

// Cambiar el fondo cada 3 segundos
setInterval(changeBackground, 3000);