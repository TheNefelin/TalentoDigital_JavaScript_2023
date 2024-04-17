const dt = `{
    "localidad 1": { "Continente": "África", "País": "Angola", "Capital": "Luanda" }, 
    "localidad 2": { "Continente": "América del Norte", "País": "Estados Unidos", "Capital": "Washington DC" },
    "localidad 3": { "Continente": "América Central", "País": "México", "Capital": "Ciudad de México" }, 
    "localidad 4": { "Continente": "América del Sur", "País": "Brasil", "Capital": "Brasilia" }, 
    "localidad 5": { "Continente": "Europa", "País": "España", "Capital": "Madrid" }, 
    "localidad 6": { "Continente": "Europa", "País": "Alemania", "Capital": "Berlín" }, 
    "localidad 7": { "Continente": "Oceanía", "País": "Australia", "Capital": "Camberra" }, 
    "localidad 8": { "Continente": "Asia", "País": "Japón", "Capital": "Tokio" } 
}`

const data = JSON.parse(dt);
var arrData = Object.keys(data).map(key => data[key]);

const body = document.querySelector("body");

arrData.forEach(e => {
    const tarjetaContenedor = document.createElement("div");
    tarjetaContenedor.classList.add("tarjeta-contenedor");

    const continente = document.createElement("div");
    continente.innerText = e.Continente;
    tarjetaContenedor.appendChild(continente);

    const pais = document.createElement("div");
    pais.innerText = e.País;
    tarjetaContenedor.appendChild(pais);
    
    const capital = document.createElement("div");
    capital.innerText = e.Capital;
    tarjetaContenedor.appendChild(capital);

    body.appendChild(tarjetaContenedor);
});

