export class Animal {
  constructor(nombre, especie, edad, urgente) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.urgente = urgente;
  }

  getNombre() {
    return this.nombre;
  }
  setNombre(n) {
    this.nombre = n;
  }

  getEspecie() {
    return this.especie;
  }
  setEspecie(e) {
    this.especie = e;
  }

  getEdad() {
    return this.edad;
  }
  setEdad(edad) {
    this.edad = edad;
  }

  getUrgente() {
    return this.urgente;
  }
  setUrgente(u) {
    this.urgente = u;
  }

  mostrar() {
    return `${this.nombre} – ${this.especie}, ${this.edad} años – ${
      this.urgente ? "Urgente" : "No urgente"
    }`;
  }
}
