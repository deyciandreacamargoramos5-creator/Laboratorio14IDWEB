function lanzamientoDados(){
    const dado1 =Math.floor(Math.random()*6) + 1;
    const dado2 =Math.floor(Math.random()*6) + 1;
    const suma = dado1 + dado2;
    console.log("Dado 1: " + dado1);
    console.log("Dado 2: " + dado2);
    console.log("La suma de los dados es: " + suma);
    return {dado1, dado2, suma};
}