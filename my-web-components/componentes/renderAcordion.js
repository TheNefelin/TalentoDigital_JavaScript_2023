export default function renderAcordion() {
    const itemCateg = [
        {
            id: 1,
            nombre: "Cervezas Artesanales",
            idCateg: 1
        }
        ,{
            id: 2,
            nombre: "Cervezas Envasadas",
            idCateg: 1
        }
    ];

    const item = [
        {
            id: 1,
            nombre: "Pils",
            descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
            precio: 5500,
            link: "./img/t-sql-server.png",
            idCateg: 1,
            estado: true
        }
        ,{
            id: 2,
            nombre: "Santa Sed",
            descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
            precio: 4800,
            link: "./img/l-csharp.svg",
            idCateg: 1,
            estado: true
        }
        ,{
            id: 3,
            nombre: "Blood",
            descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
            precio: 4500,
            link: "./img/t-dotnet.svg",
            idCateg: 1,
            estado: true
        }
        ,{
            id: 4,
            nombre: "Heineken",
            descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
            precio: 2500,
            link: "./img/t-vs-studio.svg",
            idCateg: 2,
            estado: true
        }
        ,{
            id: 5,
            nombre: "Kross",
            descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
            precio: 3500,
            link: "./img/t-git.svg",
            idCateg: 2,
            estado: true
        }
        ,{
            id: 6,
            nombre: "Kunstmann",
            descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
            precio: 2500,
            link: "./img/l-javascript.svg",
            idCateg: 2,
            estado: true
        }
        ,{
            id: 7,
            nombre: "Budweiser",
            descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
            precio: 2000,
            link: "./img/l-css.png",
            idCateg: 2,
            estado: true
        }
        ,{
            id: 8,
            nombre: "Royal",
            descripcion: "nace de lupulo y cebada, y vive en una botella encerrada, puede ser morena o dorada, puede ser de trigo o cereza, para ser sincero sin rodeo digo, buena amiga es la cerveza",
            precio: 2500,
            link: "./img/l-html.png",
            idCateg: 2,
            estado: true
        }
    ];

    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";

    const contenedor = document.createElement("section");
    contenedor.classList.add("acordion-list");

    itemCateg.forEach(categ => {
        const divCateg = document.createElement("div");
        divCateg.id = categ.id;
        divCateg.innerText = categ.nombre;
        divCateg.classList.add("acordion-list-titulo");
        contenedor.appendChild(divCateg);

        item.filter(e => e.idCateg == categ.id).forEach(d => {
            const btnItem =  document.createElement("button");
            btnItem.classList.add("acordion");
            btnItem.innerText = d.nombre;
            contenedor.appendChild(btnItem);

            const divContenido = document.createElement("div");
            divContenido.classList.add("acordion-contenido");

            const img = document.createElement("img");
            img.classList.add("acordion-contenido-img");
            img.src = d.link; 
            divContenido.appendChild(img);

            const descripcion = document.createElement("p");
            descripcion.innerText = d.descripcion;
            divContenido.appendChild(descripcion);

            const precio = document.createElement("p");
            precio.innerText = `Precio: ${d.precio} .-`;
            divContenido.appendChild(precio);

            const btnAgregar = document.createElement("button");
            btnAgregar.classList.add("btn");
            btnAgregar.classList.add("animacion");

            const span = document.createElement("span");
            span.innerText = "Agregar";
            btnAgregar.appendChild(span);

            divContenido.appendChild(btnAgregar);

            contenedor.appendChild(divContenido);

            btnItem.addEventListener("click", () => {
                acordion_click(btnItem);
            })
        });

    });

    demoContenedor.appendChild(contenedor);
};

function acordion_click(obj) {
    obj.classList.toggle("active");
    let hijo = obj.nextElementSibling;

    if (hijo.style.maxHeight) {
        hijo.style.maxHeight = null;
    } else {
        hijo.style.maxHeight = hijo.scrollHeight + "px";
    };
};