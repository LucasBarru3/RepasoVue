const pabellones = ["Arrupe", "Areilza", "Aztarain", "Guturbai"];

class Servicio {
  constructor(servicio, pabellon, mostrar) {
    this._servicio = servicio;
    this._pabellon = pabellon;
    this._mostrar = mostrar;
  }

  get servicio() {
    return this._servicio;
  }
  set servicio(valor) {
    this._servicio = valor;
  }

  get pabellon() {
    return this._pabellon;
  }
  set pabellon(valor) {
    this._pabellon = valor;
  }

  get mostrar() {
    return this._mostrar;
  }
  set mostrar(valor) {
    this._mostrar = valor;
  }

  mostrarInfo() {
    const nombrePabellon = pabellones[this._pabellon];
    const visibilidad = this._mostrar ? "Visible" : "No visible";
    return `${this._servicio} – ${this._pabellon}: ${nombrePabellon} – ${visibilidad}`;
  }
}
