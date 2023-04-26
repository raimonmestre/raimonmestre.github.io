// Abrir modal al hacer clic en el botón de suscripción
var btnSuscribir = document.querySelectorAll(".btn-suscribir");

btnSuscribir.forEach(function(btn) {
  btn.addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
  });
});

// Cerrar modal al hacer clic en el botón de cerrar o en cualquier lugar fuera del modal
var modal = document.getElementById("modal");

window.onclick = function(event) {
  if (event.target == modal) {
    cerrarModal();
  }
}

function cerrarModal() {
  modal.style.display = "none";
}

function abrirModal() {
  document.getElementById("modal").style.display = "block";
}
