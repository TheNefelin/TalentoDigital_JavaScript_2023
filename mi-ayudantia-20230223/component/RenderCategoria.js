export function RenderCategoria(dt) {
    const listaCategorias = document.querySelector(".listaCategorias");
    listaCategorias.innerHTML = "";

    let opcion = document.createElement("option");
    opcion.value = 0;
    opcion.innerText = "-- Seleccione Categoria --"

    listaCategorias.appendChild(opcion);

    dt.forEach(e => {
        opcion = document.createElement("option");
        opcion.value = e.id;
        opcion.innerText = e.nombre;

        listaCategorias.appendChild(opcion);
    });
}