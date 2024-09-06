class Reserva {
  constructor(id, cliente, propiedad) {
    this.id = id;
    this.cliente = cliente;
    this.propiedad = propiedad;
    this.fechaReserva = new Date();
    this.estado = "activa"; // activa, cancelada, concretada
  }
}