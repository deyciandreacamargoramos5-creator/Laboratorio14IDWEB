class Cuenta {
  #saldo = 0;
  depositar(monto) {
    this.#saldo += monto;
  }
  retirar(monto) {
    this.#saldo -= monto;
  }
  get saldo() {
    return this.#saldo;
  }
}
class CuentaAhorro extends Cuenta {
  retirar(monto) {
    if (monto <= this.saldo) {
      super.retirar(monto);
    } else {
      console.log("No se permite retirar mas de tu saldo");
    }
  }
}
class CuentaCorriente extends Cuenta {
  constructor(limiteSobregiro) {
    super();
    this.limite = limiteSobregiro;
  }
  retirar(monto) {
    if (monto <= this.saldo + this.limite) {
      super.retirar(monto);
    } else {
      console.log("Invalido");
    }
  }
}
const ahorro = new CuentaAhorro();
ahorro.depositar(500);
ahorro.retirar(600); 
console.log(ahorro.saldo); 
const corriente = new CuentaCorriente(200);
corriente.depositar(500);
corriente.retirar(600); 
console.log(corriente.saldo); 
