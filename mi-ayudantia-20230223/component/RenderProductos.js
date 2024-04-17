export function RenderProductos(dt) {
    const listaProductos = document.querySelector(".listaProductos");
    listaProductos.innerHTML = "";

    dt.forEach(e => {
        const btn = document.createElement("button");
        btn.value = e.id;
        btn.innerText = e.nombre;

        listaProductos.appendChild(btn)
    });
};