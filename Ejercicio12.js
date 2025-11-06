class Usuario {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
  mostrarInfo() {
    return "Usuario: " + this.nombre + " Email: " + this.email;
  }
}
class Cliente extends Usuario {
  constructor(nombre, email, nivelFidelidad) {
    super(nombre, email);
    this.nivelFidelidad = nivelFidelidad;
  }
  mostrarInfo() {
    return "Cliente: " + this.nombre +
           "Email: " + this.email +
           "Nivel de fidelidad: " + this.nivelFidelidad;
  }
}
class Administrador extends Usuario {
  constructor(nombre, email, permisos) {
    super(nombre, email);
    this.permisos = permisos;
  }
  mostrarInfo() {
    return "Administrador: " + this.nombre +
           "Email: " + this.email +
           "Permisos: " + this.permisos.join(", ");
  }
}
let cliente1 = new Cliente("Ana Torres", "ana@mail.com", 4);
let admin1 = new Administrador("Luis Pérez", "luis@mail.com", ["crear", "editar"]);
console.log(cliente1.mostrarInfo());
console.log(admin1.mostrarInfo());
