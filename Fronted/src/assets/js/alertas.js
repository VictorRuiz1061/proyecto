document.getElementById('showAlert').addEventListener('click', () => {
    Swal.fire({
        title: 'Hola',
        text: 'Actualización exitosa',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});