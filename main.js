// Código JS para el botón de registro

const btnSuscripcion = document.querySelectorAll('.btn-suscripcion');

btnSuscripcion.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'https://www.otrapagina.com';
  });
});

// Código JS para el formulario de contacto

const form = document.querySelector('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.querySelector('.btn-enviar');

btnEnviar.addEventListener('click', e => {
    e.preventDefault();
    validarFormulario();
  });
  
  function validarFormulario() {
    const nombreValor = nombre.value.trim();
    const emailValor = email.value.trim();
    const mensajeValor = mensaje.value.trim();
  
    if (nombreValor === '') {
      mostrarError(nombre, 'El nombre es obligatorio');
    } else {
      mostrarValido(nombre);
    }
  
    if (emailValor === '') {
      mostrarError(email, 'El correo electrónico es obligatorio');
    } else if (!esCorreoValido(emailValor)) {
      mostrarError(email, 'El correo electrónico no es válido');
    } else {
      mostrarValido(email);
    }
  
    if (mensajeValor === '') {
      mostrarError(mensaje, 'El mensaje es obligatorio');
    } else {
      mostrarValido(mensaje);
    }
  }
  
  function mostrarError(input, mensaje) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    input.classList.remove('input-valido');
    input.classList.add('input-error');
    small.innerText = mensaje;
  }
  
  function mostrarValido(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    input.classList.remove('input-error');
    input.classList.add('input-valido');
    small.innerText = '';
  }
  
  function esCorreoValido(correo) {
    const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresion.test(correo);
  }
  
