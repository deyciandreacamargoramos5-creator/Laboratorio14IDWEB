class Notificacion {
  enviar() {
    throw new Error("Metodo enviar()");
  }
}
class Email extends Notificacion {
  enviar() {
    console.log("Enviando email");
  }
}
class SMS extends Notificacion {
  enviar() {
    console.log("Enviando SMS");
  }
}
class Push extends Notificacion {
  enviar() {
    console.log("Enviando notificacion");
  }
}
function procesarNotificaciones(lista) {
  lista.forEach(n => n.enviar());
}
procesarNotificaciones([new Email(), new SMS(), new Push()]);