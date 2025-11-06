class Carrito {
  constructor() {
    this.items = [];
  }
  agregarProducto(producto) {
    this.items.push(producto);
  }
  calcularTotal() {
    return this.items.reduce((suma, producto) => suma + producto.precio, 0);
  }
  mostrarResumen() {
    console.log("Carrito:");
    this.items.forEach(producto => {
      console.log("- " + producto.nombre + ": " + producto.precio);
    });
    console.log("Total: " + this.calcularTotal());
  }
}
const carrito = new Carrito();
carrito.agregarProducto({ nombre: "Laptop", precio: 999.99 });
carrito.agregarProducto({ nombre: "Mouse", precio: 25.50 });
carrito.mostrarResumen();