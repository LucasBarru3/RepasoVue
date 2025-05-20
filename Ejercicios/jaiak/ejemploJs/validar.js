import { Animal } from './animal.js';

const especies = ["perro", "gato", "conejo", "ave", "hurón", "tortuga"];

const animales = [];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-animal");
  const selectEspecie = document.getElementById("select-especie");
  const lista = document.getElementById("lista-animales");
  const btnLimpiar = document.getElementById("btn-limpiar");

  // 1. Generar dinámicamente las opciones del select
  especies.forEach(e => {
    const option = document.createElement("option");
    option.value = e;
    option.textContent = e.charAt(0).toUpperCase() + e.slice(1);
    selectEspecie.appendChild(option);
  });

  // 2. Envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const especie = form.especie.value;
    const edad = parseInt(form.edad.value.trim());
    const urgente = form.urgente.checked;

    // 3. Validaciones
    const nombreOk = /^[a-zA-Z0-9\- ]{2,30}$/.test(nombre);
    const especieOk = especies.includes(especie);
    const edadOk = !isNaN(edad) && edad >= 0 && edad < 100;
    const nombreDuplicado = animales.some(a => a.getNombre().toLowerCase() === nombre.toLowerCase());

    if (!nombreOk || !especieOk || !edadOk) {
      alert("Datos inválidos. Revisa nombre, especie o edad.");
      return;
    }

    if (nombreDuplicado) {
      alert("Ese nombre ya ha sido registrado.");
      return;
    }

    // 4. Crear y añadir animal
    const nuevo = new Animal(nombre, especie, edad, urgente);
    animales.push(nuevo);

    // 5. Mostrar en la lista
    const li = document.createElement("li");
    li.textContent = nuevo.mostrar();

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => {
      lista.removeChild(li);
      const index = animales.indexOf(nuevo);
      if (index !== -1) animales.splice(index, 1);
      console.log("Actualizado:", animales);
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);

    console.log("Animal registrado:", nuevo.mostrar());
    console.log("Lista completa:", animales);

    form.reset();
  });

  // 6. Botón limpiar lista
  btnLimpiar.addEventListener("click", () => {
    if (confirm("¿Seguro que quieres eliminar toda la lista?")) {
      lista.innerHTML = "";
      animales.length = 0;
      console.log("Lista de animales vaciada.");
    }
  });
});
