const usuarios = [
  new Cliente("Ana", "ana@mail.com", 3),
  new Administrador("Luis", "luis@mail.com", ["crear", "editar"])
];
usuarios.forEach(u => console.log(u.mostrarInfo()));
