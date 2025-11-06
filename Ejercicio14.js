class Empleado {
  constructor(nombre, sueldoBase) {
    this.nombre = nombre;
    this.sueldoBase = sueldoBase;
  }
  calcularSueldo() {
    return this.sueldoBase;
  }
}
class Programador extends Empleado {
  constructor(nombre, sueldoBase, lenguaje) {
    super(nombre, sueldoBase);
    this.lenguaje = lenguaje;
  }
  calcularSueldo() {
    return super.calcularSueldo() * 1.10; 
  }
}
class ProgramadorSenior extends Programador {
  constructor(nombre, sueldoBase, lenguaje) {
    super(nombre, sueldoBase, lenguaje);
  }
  calcularSueldo() {
    return super.calcularSueldo() * 1.25;
  }
}
const emp1 = new Empleado("Jose", 1500);
console.log(emp1.nombre, emp1.calcularSueldo());
const prog1 = new Programador("María", 2000, "JavaScript");
console.log(prog1.nombre, prog1.calcularSueldo());
const progSenior1 = new ProgramadorSenior("Luis", 2000, "Python");
console.log(progSenior1.nombre, progSenior1.calcularSueldo());
