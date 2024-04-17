export class Comida {
    #id
    #nombre
    #color

    constructor(id, nombre, color) {
        this.#id = id;
        this.#nombre = nombre;
        this.#color = color;
    };

    getId() {
        return this.#id;
    }

    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getColor() {
        return this.#color;
    }

    getComidaObj() {
        return {
            id: this.#id,
            nombre: this.#nombre,
            color: this.#color
        }
    }
};

export class Torta extends Comida  {
    constructor(id, nombre, color, ingrediente) {
        super(id, nombre, color);
        this._ingrediente = ingrediente;
    };
};

export class Promedio {
    constructor() {
    }

    getPromedio(arr) {
        if (Array.isArray(arr)) {
            let promedio = 0;

            arr.forEach(n => {
                promedio += n
            });

            promedio = promedio / arr.length

            if (promedio > 3) {
                console.log({
                    promedio: promedio,
                    mensaje: "Felicidades Aprobado"
                })
            } else {
                console.log({
                    promedio: promedio,
                    mensaje: "NO Aprobado"
                })
            }
        } else {
            console.log("Ingrese Un Arreglo de Notas")
        }
    }
}

export class Alumno {
    #nombre
    #notas

    constructor(nombre, notas) {
        this.#nombre = nombre;
        this.#notas = notas
    }

    getNombre() {
        return this.#nombre;
    }

    getPromedio() {
        let promedio = 0;
        this.#notas.forEach(n => {
            promedio += n;
        });

        return promedio / this.#notas.length
    }

    getMensaje() {
        if (this.getPromedio() > 3) {
            return "FELICIDADES A APROBADO!!!"
        } else {
            return "HA REPETIDO EL CURSO!!!"
        }
    }
}

export class Colegio {
    #losAlumnos
    
    constructor() {
        this.#losAlumnos = []
    }

    setAlumno(alumno) {
        this.#losAlumnos.push(alumno);
    }

    getAlumnos() {
        this.#losAlumnos.forEach(e => {
            console.log(`Nombre: ${e.getNombre()} Promedio: ${e.getPromedio()} Msge: ${e.getMensaje()}`)
        });
        return this.#losAlumnos;
    }
}