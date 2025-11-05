function gradosARadianes(grados){
    const radianes = grados * (Math.PI/180);
    const seno = Math.sin(radianes);
    const coseno = Math.cos(radianes);
    console.log("Angulos en Grados: " + grados);
    console.log("Angulos en Radianes: " + radianes);
    console.log("Seno: " + seno);
    console.log("coseno: " + coseno);
    return {
        radianes : radianes,
        seno : seno,
        coseno : coseno,
    };
}
console.log(gradosARadianes(90))