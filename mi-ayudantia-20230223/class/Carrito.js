export class Carrito {
    #productos

    constructor() {
        this.#productos = [];
    }

    setProducto(id, nombre, cant, precio) {
        this.#productos.push({id, nombre, cant, precio});
    }

    getProductos() {
        return this.#productos;
    };

    deleteProducto(id) {
        const index = this.#productos.findIndex(e => e.id == id)

        if (index >= 0){
            this.#productos.splice(index, 1);
        };
    };
};