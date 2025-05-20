const servicios = []

document.getElementById('formServicio').addEventListener('submit', function (e) {
  e.preventDefault()

  const servicioInput = document.getElementById('servicio').value.trim()
  const pabellonInput = parseInt(document.getElementById('pabellon').value)
  const mostrarInput = document.getElementById('mostrar').checked

  // Validar servicio: letras, números o guion alto
  const regex = /^[\w\-]+$/
  if (!regex.test(servicioInput)) {
    alert("El servicio solo puede contener letras, números o guiones.")
    return
  }

  // Validar pabellón
  if (isNaN(pabellonInput) || pabellonInput < 0 || pabellonInput >= pabellones.length) {
    alert("Pabellón inválido. Debe estar entre 0 y 3.")
    return
  }

  // Crear objeto y añadir al array
  const nuevoServicio = new Servicio(servicioInput, pabellonInput, mostrarInput)
  servicios.push(nuevoServicio)

  console.log(nuevoServicio.mostrarInfo())
  console.log(servicios)
})