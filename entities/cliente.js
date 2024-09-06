class Cliente {
  constructor(id, nombre, apellido) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.reservas = [];
  }

  agregarReserva(reserva) {
    this.reservas.push(reserva);
  }
}