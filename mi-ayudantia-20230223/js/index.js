import { SucursalApi, ProductoApi, CategoriaApi } from "../class/ApiTienda.js";
import { Carrito } from "../class/Carrito.js";
import { RenderSucursales } from "../component/RenderSucursal.js";
import { RenderProductos } from "../component/RenderProductos.js";
import { RenderCategoria } from "../component/RenderCategoria.js";
import { RenderCarrito } from "../component/RenderCarrito.js";
import { Test } from "../class/Test.js";
import { Comida, Promedio, Torta, Colegio, Alumno } from "../class/Clases.js";
import { Promesa } from "../class/Promesa.js";
import { Asincronia } from "../class/Asincronia.js";

window.onload = () => {
    inicializarAPi();
    renderCarritoConListener(getCarritoLS().getProductos());
};

function inicializarAPi() {
    const listaSucursales = new SucursalApi().getSucursal()
    listaSucursales.then(data => {
        RenderSucursales(data);
    })
    .then(() => {
        const opcionSucursales =  document.querySelector(".listaSucursales");
        opcionSucursales.addEventListener("change", () => clickSucursal(opcionSucursales.value))
    })
    .catch(err => console.log(err));
};

function clickSucursal(id) {
    Promise.all([
        new CategoriaApi().getCategoria().then(data => data),
        new ProductoApi().getProductoBySucu(id).then(data => data)
    ])
    .then(arr => {
        const arrIdCateg = [];
        const arrCateg = [];

        arr[1].forEach(e => {
            if (arrIdCateg.indexOf(e.idCategoria) == -1) {
                arrIdCateg.push(e.idCategoria);
                arrCateg.push(arr[0].find(oe => oe.id == e.idCategoria))
            };
        });

        RenderCategoria(arrCateg);

        const listaCategorias = document.querySelector(".listaCategorias");
        listaCategorias.addEventListener("change", () => {
            RenderProductos(arr[1].filter(e => e.idCategoria == listaCategorias.value))

            const btnProductos = document.querySelectorAll("button");
        
            btnProductos.forEach(e => {
                e.addEventListener("click", () => {
                    agregarACarrito(e.value);
                })
            });
        });

        setBodegaLS(arr[1]);
    });
};

function agregarACarrito(id) {
    const producto = getBodegaLS().find(e => e.id == id);
    const carrito = getCarritoLS();
    if (producto) {
        carrito.setProducto(producto.id, producto.nombre, 1, producto.precio)
        setCarritoLS(carrito);
    }

    // delCarritoLS()
    renderCarritoConListener(carrito.getProductos());
};

function renderCarritoConListener(cr) {
    RenderCarrito(cr);

    const btnCarrito = document.querySelectorAll(".productosCarrito button");
    btnCarrito.forEach(e => {
        e.addEventListener("click", () => {
            eliminarDelCarrito(e.value);
        });
    });
}

function eliminarDelCarrito(id) {
    const carrito = getCarritoLS();
    carrito.deleteProducto(id);
    setCarritoLS(carrito);
    renderCarritoConListener(carrito.getProductos());
}

// -- Bodega -----------------------------------------------------------
// ---------------------------------------------------------------------
function setBodegaLS(bodega) {
    delBodegaLS();
    localStorage.setItem('bodega', JSON.stringify(bodega));
}

function getBodegaLS() {
    return JSON.parse(localStorage.getItem('bodega'));
}

function delBodegaLS() {
    localStorage.removeItem('bodega');
}

// -- Carrito ----------------------------------------------------------
// ---------------------------------------------------------------------
function setCarritoLS(carrito) {
    delCarritoLS();
    localStorage.setItem('carrito', JSON.stringify(carrito.getProductos()));
}

function getCarritoLS() {
    const carritoLS = JSON.parse(localStorage.getItem('carrito'))
    const carrito = new Carrito();

    if (carritoLS) {
        carritoLS.forEach(e => {
            carrito.setProducto(e.id, e.nombre, e.cant, e.precio); 
        });
        
        return carrito;
    } else {
        return carrito
    }
}

function delCarritoLS() {
    localStorage.removeItem('carrito');
}

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------

const btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", () => {
    Test()
});

const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", () => {
    const fruta = new Comida(1, "platano", "azul");
    console.log(fruta)
    fruta.setNombre("Manzana")
    console.log(fruta.getComidaObj())

    const torta = new Torta(1, "Mil Hoja", "Cafe", "Chocolate")
    console.log(torta)

    const promedio = new Promedio()
    // console.log(promedio.getPromedio([4.1, 2, 2.2, 3]))

    const cole = new Colegio()
    cole.setAlumno(new Alumno("Francsico", [2, 5, 4, 6, 3]))
    cole.setAlumno(new Alumno("Andrea", [7, 7, 7, 7, 7]))
    cole.setAlumno(new Alumno("Eme", [1, 2, 3, 4, 5]))

    console.log(cole.getAlumnos())

});

// ---------------------------------------------------------------------
// ---------------------------------------------------------------------
const btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", () => {
    Promesa();
})
    
const btn4 = document.querySelector("#btn4")
btn4.addEventListener("click", () => {
    Asincronia();
})
    