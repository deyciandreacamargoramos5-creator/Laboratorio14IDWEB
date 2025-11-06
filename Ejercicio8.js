function Calificaciones(calificaciones) {
  const max = Math.max(...calificaciones);
  return calificaciones.map(nota => (nota / max));
};
console.log(Calificaciones([10, 15, 20]));