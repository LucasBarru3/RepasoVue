const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const horaInput = document.getElementById('hora');
const pistaSelect = document.getElementById('pista');
const tabla = document.getElementById('tabla').querySelector('tbody');
const mensaje = document.getElementById('mensaje');
const reloj = document.getElementById('reloj');

const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
actualizarTabla();

pistas.forEach((pista, index) => {
  const option = document.createElement('option');
  option.value = index;
  option.textContent = pista;
  pistaSelect.appendChild(option);
});

// Validación con RegEx
function validarNombre(nombre) {
  return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre);
}

// Temporizador reloj
setInterval(() => {
  const ahora = new Date();
  reloj.textContent = ahora.toLocaleTimeString();
}, 1000);

// Evento teclado (Enter)
nombreInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    console.log("Nombre confirmado");
  }
});

// Evento submit del formulario
formulario.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = nombreInput.value.trim();
  const hora = horaInput.value;
  const tipoPista = parseInt(pistaSelect.value);
  const notificaciones = document.getElementById('notificaciones').checked;

  // Validaciones
  let valido = true;
  if (!validarNombre(nombre)) {
    document.getElementById('errorNombre').textContent = "Nombre inválido";
    valido = false;
  } else {
    document.getElementById('errorNombre').textContent = "";
  }

  if (!hora) {
    document.getElementById('errorHora').textContent = "Hora requerida";
    valido = false;
  } else {
    document.getElementById('errorHora').textContent = "";
  }

  if (!valido) return;

  const reserva = new Reserva(nombre, hora, tipoPista, notificaciones);
  reservas.push(reserva);
  localStorage.setItem('reservas', JSON.stringify(reservas));
  console.log(reserva.mostrar());
  agregarFila(reserva);

  mensaje.textContent = "Reserva guardada correctamente";
  setTimeout(() => mensaje.textContent = "", 3000);

  formulario.reset();
});

// Añadir fila a la tabla
function agregarFila(reserva) {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${reserva.nombre}</td>
    <td>${reserva.hora}</td>
    <td>${pistas[reserva.tipoPista]}</td>
    <td>${reserva.notificaciones ? "Sí" : "No"}</td>
  `;
  tabla.appendChild(fila);
}

// Eliminar fila con doble clic (event delegation + stopPropagation)
tabla.addEventListener("dblclick", e => {
  if (e.target.tagName === "TD") {
    e.stopPropagation();
    e.target.parentElement.remove();
  }
});

// Limpiar reservas
document.getElementById("limpiar").addEventListener("click", () => {
  localStorage.removeItem("reservas");
  reservas.length = 0;
  tabla.innerHTML = "";
});

// Al cargar: mostrar las guardadas
function actualizarTabla() {
  reservas.forEach(r => agregarFila(r));
}

// Consultar disponibilidad vía fetch
document.getElementById("consultar").addEventListener("click", async () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Cargando...";

  try {
    const res = await fetch("disponibilidad.json");
    if (!res.ok) throw new Error("Error HTTP");
    const datos = await res.json();
    resultado.innerHTML = "<ul>" + datos.map(d => `<li>${d}</li>`).join('') + "</ul>";
  } catch {
    resultado.textContent = "Error al cargar los datos";
  }
});
