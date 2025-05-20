const pistas = ["Tenis", "Fútbol", "Baloncesto", "Pádel"];

class Reserva {
  constructor(nombre, hora, tipoPista, notificaciones) {
    this.nombre = nombre;
    this.hora = hora;
    this.tipoPista = tipoPista; // posición numérica
    this.notificaciones = notificaciones;
  }

  getNombre() { return this.nombre; }
  getHora() { return this.hora; }
  getTipoPista() { return this.tipoPista; }
  getNotificaciones() { return this.notificaciones; }

  setNombre(n) { this.nombre = n; }
  setHora(h) { this.hora = h; }
  setTipoPista(p) { this.tipoPista = p; }
  setNotificaciones(n) { this.notificaciones = n; }

  mostrar() {
    const vis = this.notificaciones ? "Con notificaciones" : "Sin notificaciones";
    return `${this.nombre} - ${this.hora} - ${this.tipoPista}: ${pistas[this.tipoPista]} - ${vis}`;
  }
}
