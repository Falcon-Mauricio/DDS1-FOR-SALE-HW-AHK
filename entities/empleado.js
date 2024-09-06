export class Empleado {
  constructor(id, nombre, apellido) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.cantidadOperaciones = 0;
    this.cantidadReservas = 0;
    this.totalComisiones = 0;
    this.operaciones = [];
    this.reservas = [];
  }

  agregarOperacion(operacion) {
    this.operaciones.push(operacion);
    this.cantidadOperaciones += 1;
    this.totalComisiones += operacion.comision;
  }

  agregarReserva(reserva) {
    this.reservas.push(reserva);
    this.cantidadReservas += 1;
  }
}