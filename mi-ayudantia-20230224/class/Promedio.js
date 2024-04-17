export class Promedio {
    #notas
    
    constructor() {
        this.#notas = [];
    }

    setNota(n) {
        this.#notas.push(n);
    }

    getNotas() {
        return this.#notas;
    }

    getPromedio() {
        let promedio = 0;

        if (this.#notas) {
            this.#notas.forEach(e => {
                promedio += e
            });

            promedio = promedio / this.#notas.length;
        }

        return promedio;
    }
}