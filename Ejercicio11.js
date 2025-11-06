class Figura {
    constructor() {
    }
    area() {
        return 0; 
    }
    perimetro() {
        return 0;
    }
}
class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    area() {
        return this.lado ** 2;
    }
    perimetro() {
        return this.lado * 4;
    }
}
class Triangulo extends Figura {
    constructor(lado1, lado2, lado3) {
        super();
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    area() {
        const s = this.perimetro() / 2;
        return Math.sqrt(s * (s - this.lado1) * (s - this.lado2) * (s - this.lado3));
    }
    perimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
}
const cuadrado = new Cuadrado(5);
console.log("Cuadrado - Área:", cuadrado.area()); 
console.log("Cuadrado - Perímetro:", cuadrado.perimetro()); 

const triangulo = new Triangulo(3, 4, 5);
console.log("Triángulo - Área:", triangulo.area()); 
console.log("Triángulo - Perímetro:", triangulo.perimetro()); 
const figuraGenerica = new Figura();
console.log("Figura genérica - Área:", figuraGenerica.area()); 
console.log("Figura genérica - Perímetro:", figuraGenerica.perimetro()); 