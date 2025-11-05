function redondeo(){
    let numero = parseFloat(prompt("Ingresa el precio de un producto en decimal"));
    redondeoArriba=Math.ceil(numero);
    redondeoAbajo=Math.floor(numero);
    redondeoNormal=Math.round(numero);
    console.log("Redondeo hacia arriba del numero es: " + redondeoArriba);
    console.log("Redondeo hacia abajo del numero es: " + redondeoAbajo);
    console.log("Redondeo normal del numero es: " + redondeoNormal);
} 