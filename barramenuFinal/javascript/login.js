// Seleccionar el formulario de inicio de sesión
const loginForm = document.querySelector('.container_L form');

// Seleccionar los campos de entrada del formulario de inicio de sesión
const loginUsernameInput = loginForm.querySelector('input[placeholder="Usuario"]');
const loginPasswordInput = loginForm.querySelector('input[placeholder="Password"]');

// Seleccionar el botón de envío del formulario de inicio de sesión
const loginSubmitBtn = loginForm.querySelector('#loginSubmitBtn');

// Agregar un evento de clic al botón de envío del formulario de inicio de sesión
loginSubmitBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Validar los campos del formulario de inicio de sesión
    if (loginUsernameInput.value.trim() === '') {
        Swal.fire('Error', 'Por favor, ingrese un nombre de usuario.', 'error');
        return;
    }

    if (loginPasswordInput.value.trim() === '') {
        Swal.fire('Error', 'Por favor, ingrese una contraseña.', 'error');
        return;
    }

    // Si todas las validaciones pasan, mostrar la ventana emergente de inicio de sesión exitoso
    Swal.fire({
        title: '¡Inicio de sesión exitoso!',
        text: 'Has iniciado sesión correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Limpiar los campos del formulario
          limpiarCampos();
        }
      });
});