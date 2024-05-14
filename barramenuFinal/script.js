

const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())



let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    
}   

/*funcion para marcar el navbar*/
function activateCurrentLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
/*funcion para marcar el navbar*/ 

/* funcion para el formulario */


function validarFormulario() {
  // variables
  var rut = document.getElementById("rut").value;
  var nombre = document.getElementById("nombre").value;
  var apellidoPaterno = document.getElementById("apellidoPaterno").value;
  var apellidoMaterno = document.getElementById("apellidoMaterno").value;
  var fechaNacimiento = document.getElementById("fechaNacimiento").value;
  var email = document.getElementById("email").value;
  var celular = document.getElementById("celular").value;
  var motivacion = document.getElementById("motivacion").value;

  // validacion rut
  if (rut.length < 9 || rut.length > 10) {
    alert("El RUT debe tener entre 9 y 10 caracteres.");
    return false;
  }
  //validacion nombre y apellido
  if (nombre.length < 3 || nombre.length > 20) {
    alert("El Nombre debe tener entre 3 y 20 caracteres.");
    return false;
  }

  if (apellidoPaterno.length < 3 || apellidoPaterno.length > 20) {
    alert("El Apellido Paterno debe tener entre 3 y 20 caracteres.");
    return false;
  }

  if (apellidoMaterno.length < 3 || apellidoMaterno.length > 20) {
    alert("El Apellido Materno debe tener entre 3 y 20 caracteres.");
    return false;
  }

  // validar edad
  var hoy = new Date(); //fecha actual en la variable hoy
  var fechaNacimientoA = new Date(fechaNacimiento); // variable fdn en la var fncA para realizar el calculo
  var edad = hoy.getFullYear() - fechaNacimientoA.getFullYear();//calculo en y para la variable edad 
  if (edad < 18 || edad > 35) { //validacion
    alert("Debes tener entre 18 y 35 años para postular.");
    return false;
  }

// validar correo electrónico
var email = document.getElementById("email").value;
if (!email) {
    alert("Debes ingresar un correo electrónico.");
    return false;
} else if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Debes ingresar una dirección de correo electrónico válida.");
    return false;
}
//valida celular
  if (celular.length < 9 || celular.length > 12) {
    alert("El número de celular debe tener entre 9 y 12 caracteres.");
    return false;
  }

  // si las validaciones pasan el formulario es valido
  return true;
}

//funcion para calcular la edad y almacenarla en una variable edad
//que sera usada para obtener los datos ingresados y generar la carta
function calcularEdad(fechaNacimiento) {
  var hoy = new Date();
  var fechaNacimientoDate = new Date(fechaNacimiento);
  var edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
  return edad;
}

function generarCarta() {
  // valida el formulario antes de generar la carta
  if (!validarFormulario()) {
    return;
  }
  console.log("Generando Formulario...");
  // obtener datos 
  var rut = document.getElementById("rut").value;
  var nombre = document.getElementById("nombre").value;
  var apellidoPaterno = document.getElementById("apellidoPaterno").value;
  var apellidoMaterno = document.getElementById("apellidoMaterno").value;
  var fechaNacimiento = document.getElementById("fechaNacimiento").value;
  var email = document.getElementById("email").value;
  var celular = document.getElementById("celular").value;
  var motivacion = document.getElementById("motivacion").value;

  // generar la carta
  var cartaTexto = "click en enviar y nos contactaremos a la brevedad."

  // Mostrar la carta usando Sweetalert2
  Swal.fire({
    title: "Generado con exito",
    text: cartaTexto,
    icon: "success",
    showCancelButton: true,
    confirmButtonText: "Enviar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33"
  }).then((result) => {
    if (result.isConfirmed) {
      // Activar el envío del formulario
      document.getElementById("postulacionForm").submit();
    }
  });
}

//reloj de login 
function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = timeString;
}

// Actualiza el reloj cada segundo
setInterval(updateClock, 1000);

// Inicializa el reloj
updateClock();