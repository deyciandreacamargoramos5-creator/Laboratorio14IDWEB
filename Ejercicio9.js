class Producto {
    #nombre;
    #precio;
    #stock;
    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.setPrecio(precio);
        this.setStock(stock);
    }
    setPrecio(precio) {
        if (precio > 0) {
            this.#precio = precio;
        }else{
            console.log("Precio invalido");
        }
    }
    setStock(stock) {
        if (stock >= 0) {
            this.#stock = stock;
        }else{
            console.log("Stock invalido");
        }
    }
    getNombre() { 
        return this.#nombre; 
    }
    getPrecio() { 
        return this.#precio; 
    }
    getStock() { 
        return this.#stock; 
    }
    vender(cantidad) {
        if (cantidad <= this.#stock) {
            this.#stock -= cantidad;
            console.log("Venta realizada Stock restante:" + this.#stock);
        } else {    
            console.log("Stock insuficiente");
        }
    }
}
const producto1 = new Producto("Teclado", 40, 10);
producto1.vender(3);   
producto1.vender(20);  
console.log(producto1.getStock());  
