// -- NavBar --------------------------------------------------------------->
// ------------------------------------------------------------------------->

// inicializa
window.onload = inicializarSitio();

function inicializarSitio() {
    getMenuLinks();
    getCarruselCateg();
};

// Carga los inks del menu principal
function getMenuLinks() {
    let navBarlinks = document.querySelector(".navBar-links");
    let nElemento = "";

    dataLinksMenu.map((d) => {
        nElemento = nElemento + `<a id=${d.id} href="${d.link}" target="_blank" onclick="menuLink_click(this)">${d.nombre}</a>`;
    });

    navBarlinks.innerHTML = nElemento;
};

// Click en algun link del menu principal
function menuLink_click(obj) {
    console.dir(obj.name);
    navBarBtn_click();
};

function navBarBtn_click() {
    let navBarBtn = document.querySelector(".navBar-btn");
    let navBarlinks = document.querySelector(".navBar-links"); 
    navBarBtn.classList.toggle("navBar-btn_click");
    navBarlinks.classList.toggle("navBar-links_noOcultar");
};


// -- Carrusel ------------------------------------------------------------->
// ------------------------------------------------------------------------->

// Carga carrusel
function getCarruselCateg() {
    let carruzel = document.querySelector(".carruzel");
    let idCateg = 0;
    newItem = "";
    
    dataCateg.map((d, index) => {
        if (d.id === 1) {
            newItem = newItem + `<div value=${index + 1} id=${d.id} class="carruzel-item" style="background-image: url('${d.link}');">`;
            idCateg = d.id;
        }else{
            newItem = newItem + `<div value=${index + 1} id=${d.id} class="carruzel-item carruzel-item_ocultar" style="background-image: url('${d.link}');">`;
        }

        newItem = newItem + `<h1>${d.nombre}</h1></div>`;
    });

    carruzel.innerHTML = newItem;
    acordion_llenarItems(idCateg);
}

// Mover carrusel
let carruselPos = 0;

function carrusel_btnMover_click(mov){
    carruselPos = carruselPos + mov;

    let items = document.querySelector(".carruzel").childNodes;
    
    if (carruselPos > items.length -1) {
        carruselPos = 0;
    }else if (carruselPos == -1) {
        carruselPos = items.length -1;
    }

    let idCateg = 0;

    items.forEach((d, index) => {
        if (carruselPos == index) {
            d.classList.remove("carruzel-item_ocultar");
            d.classList.add("carruzel-item_noOcultar");
            idCateg = d.id;
        }else{
            d.classList.add("carruzel-item_ocultar");
            d.classList.remove("carruzel-item_noOcultar")
        }
    });

    acordion_llenarItems(idCateg);
};    

// -- Acordion ------------------------------------------------------------->
// ------------------------------------------------------------------------->

// let anchoWin = $(window).width();

// window.addEventListener("resize", () => {
//     if (anchoWin != $(window).width()) {
//         accord = document.getElementsByClassName("acordion");

//         for (let i = 0; i < accord.length; i++) {
//             if (accord[i].nextElementSibling.style.maxHeight) {
//                 accord[i].nextElementSibling.style.maxHeight = null
//                 accord[i].classList.remove("active");

//             }  
//         }
//     };
// });

// Cierra todos los acordiones abiertos 
function cerrarAcordionesAbiertos() {
    accord = document.getElementsByClassName("acordion");

    for (let i = 0; i < accord.length; i++) {
        if (accord[i].nextElementSibling.style.maxHeight) {
            accord[i].nextElementSibling.style.maxHeight = null
            accord[i].classList.remove("active");
        }
    }
}

// Se carga el acorion de productos por sub cateogira
// idCateg = categoria superior (Carrusel)
// d.idCateg = Categoria de items (Titulo Rojo)
function acordion_llenarItems(idCateg){
    let newItem = "";

    dataCategItem.map((item) => {
        if (item.idCateg == idCateg){
            newItem = newItem + `<div key=${idCateg} id="${item.id}" class="acordion-list-titulo">${item.nombre}</div>`;

            dataItem.map((d) => {
                if (d.idCateg == item.id) {
                    newItem = newItem + `<button class="acordion" onclick="acordion_click(this)">${d.nombre}</button>`;
                    newItem = newItem + `<div class="acordion-contenido">`;
                    newItem = newItem + `<img class="acordion-contenido-img" src="${d.link}">`;
                    newItem = newItem + `<p>${d.descripcion}</p>`;
                    newItem = newItem + `<p>Precio <strong>${d.precio} .-</strong></p>`;
                    newItem = newItem + `<button value=${d.id} class="btn animacion" onclick="agregarItem_click(this)"><span>Agregar</span></button></div>`;
                }
            });
        }
    });

    let addItems = document.querySelector(".acordion-list");
    addItems.innerHTML = newItem;
};

// Abre el contenido del acordion seleccionado
function acordion_click(obj) {
    obj.classList.toggle("active");
    let hijo = obj.nextElementSibling;

    if (hijo.style.maxHeight) {
        hijo.style.maxHeight = null;
    } else {
        hijo.style.maxHeight = hijo.scrollHeight + "px";
    }
};

// -- Carrito y Comanda ---------------------------------------------------->
// ------------------------------------------------------------------------->

// Ver la comanda
function comanda_ver() {
    cerrarAcordionesAbiertos()

    let objCarrito = document.querySelector(".carrito");
    let objComanda = document.querySelector(".comanda");

    objCarrito.classList.add("carrito_ocultar");
    objComanda.classList.add("comanda_noOcultar");
}

// Ocultar la comanda
function comanda_ocultar() {
    let objCarrito = document.querySelector(".carrito");
    let objComanda = document.querySelector(".comanda");

    objCarrito.classList.remove("carrito_ocultar");
    objComanda.classList.remove("comanda_noOcultar");
}

// Agrega items a la comanda
let comanda = [];

function agregarItem_click(obj) {
    dataItem.map((d) => {
        if (d.id == obj.value) {
            comanda.push(d);
        }
    });

    actualizarItems_comanda();
};

// Actualizar Items de la comanda
function actualizarItems_comanda(){
    let objTotal = document.querySelector(".comanda-item-total");
    let carritoCant = document.querySelector(".carrito-cont");
    let comandaItems = document.querySelector(".comanda-items");

    comanda.sort;
    let newItemComanda = "";
    let total = 0;

    comanda.map((d, index) => {
        newItemComanda = newItemComanda + `<li key=${index} value=${d.id} class="comanda-item">${d.nombre}<span>${d.precio}</span><span class="comanda-item-eliminar" onclick="eliminarItem_ckick(this)" id=${index}>&times;</span></li>`;
        total = total + d.precio;
    });

    objTotal.textContent = "TOTAL: " + total;
    carritoCant.textContent = comanda.length;
    comandaItems.innerHTML = newItemComanda;
}

// Elimina items de la comanda
function eliminarItem_ckick(obj) {
    comanda.splice(obj.id, 1);
    actualizarItems_comanda()
}

// ------------------------------------------------------------------------->
// ------------------------------------------------------------------------->

