export function RenderSucursales(dt) {
    const listaSucursales =  document.querySelector(".listaSucursales");
    listaSucursales.innerHTML = "";

    let opcion = document.createElement("option");
    opcion.value = 0;
    opcion.innerText = "-- Seleccione Sucursal --";

    listaSucursales.appendChild(opcion);

    dt.map(e => {
        opcion = document.createElement("option");
        opcion.value = e.id;
        opcion.innerText = e.nombre;

        listaSucursales.appendChild(opcion);
    });
};

