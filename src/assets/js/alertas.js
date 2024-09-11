document.getElementById('showAlert').addEventListener('click', () => {
    Swal.fire({
        title: 'Hola',
        text: 'actualización exitosa',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});