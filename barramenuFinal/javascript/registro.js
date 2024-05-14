// Seleccionar el formulario
const form = document.querySelector('form');

// Seleccionar los campos de entrada
const usernameInput = document.querySelector('input[placeholder="Usuario"]');
const fullNameInput = document.querySelector('input[placeholder="Nombre completo"]');
const emailInput = document.querySelector('input[placeholder="Email"]');
const passwordInput = document.querySelector('input[placeholder="Password"]');

// Seleccionar el botón de envío
const submitBtn = document.getElementById('submitBtn');

// Agregar un evento de clic al botón de envío
submitBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Validar los campos
    if (usernameInput.value.trim() === '') {
        Swal.fire('Por favor, ingrese un nombre de usuario.');
        return;
    }

    if (fullNameInput.value.trim() === '') {
        Swal.fire('Por favor, ingrese su nombre completo.');
        return;
    }

    if (emailInput.value.trim() === '') {
        Swal.fire('Por favor, ingrese un correo electrónico.');
        return;
    }

    if (passwordInput.value.trim() === '') {
        Swal.fire('Por favor, ingrese una contraseña.');
        return;
    }

    // Si todas las validaciones pasan, puedes enviar el formulario



    Swal.fire({
        title: '¡Registro exitoso!',
        text: 'Tu registro se ha completado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Limpiar los campos del formulario de registro
            limpiarCamposRegistro();
        }
    });


});




