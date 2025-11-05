function potenciasRaices(){
    let numero =parseFloat(prompt("Ingresa un numero"));
    let cuadrado = Math.pow(numero, 2);
    let cubo = Math.pow(numero, 3);
    let raiz = Math.sqrt(numero);
    console.log("El cuadrado del numero es: " + cuadrado);
    console.log("EL cubo del numero es: " + cubo);
    console.log("La raiz cuadrada del numero es: " + raiz);
}