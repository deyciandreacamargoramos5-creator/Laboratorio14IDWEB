class GetterProducto {
    #precio;
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.setPrecio(precio);
    }
    get precio() {
        return this.#precio.toFixed(2);
    }
    setPrecio(valor) {
        const numeroConvertido = Number(valor);
        if (numeroConvertido > 0) {
            this.#precio = numeroConvertido;
        }else{
            console.log("Precio Invalido");
        }
    }
}
const p1 = new GetterProducto("Laptop", "120.5");
console.log(p1.precio);
const p2 = new GetterProducto("Mouse", 25);
console.log(p2.precio);
