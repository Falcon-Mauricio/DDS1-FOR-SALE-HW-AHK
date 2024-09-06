export class Operacion {
  constructor(id, tipo, valorInmueble, meses, empleado, propiedad) {
    this.id = id;
    this.tipo = tipo;
    this.valorInmueble = valorInmueble;
    this.meses = meses || 0; // Solo para alquileres
    this.empleado = empleado;
    this.propiedad = propiedad;
    this.fecha = new Date();
    this.comision = this.calcularComision();
  }

  calcularComision() {
    if (this.tipo === "alquiler") {
      return (this.meses * this.valorInmueble) / 50000;
    } else if (this.tipo === "venta") {
      const porcentajeComision = 0.015; // Ejemplo para el 1.5% actual
      return this.valorInmueble * porcentajeComision;
    }
    return 0;
  }
}