
class Propiedad {
  constructor(id, tipo, tamaño, ambientes, valor, zona) {
    this.id = id;
    this.tipo = tipo;
    this.tamaño = tamaño;
    this.ambientes = ambientes;
    this.valor = valor;
    this.zona = zona;
    this.estado = "disponible"; // disponible, reservada, alquilada, vendida
    this.clienteReserva = null;
  }
}
