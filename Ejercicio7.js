function DistanciaDosPuntos(x1, y1, x2, y2){
    const distanciaEntrePuntos = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const distanciaPunto1Origen = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    const distanciaPunto2Origen = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    const sumaDistancias = distanciaPunto1Origen + distanciaPunto2Origen;
    return {
        distanciaEntrePuntos,
        distanciaPunto1Origen,
        distanciaPunto2Origen,
        sumaDistancias
    };
}
let resultado = DistanciaDosPuntos(3, 4, 6, 8);
console.log("Distancia entre puntos:", resultado.distanciaEntrePuntos);
console.log("Distancia del punto 1 al origen:", resultado.distanciaPunto1Origen);
console.log("Distancia del punto 2 al origen:", resultado.distanciaPunto2Origen);
console.log("Suma de distancias al origen:", resultado.sumaDistancias);