export default function renderTarjetaExt() {
    const arr = [
        {
            titulo: "SQL SERVER",
            detalle: "Data Base Mágic",
            texto: "Ahsoka Tano es un personaje de la franquicia Star Wars. Presentada como la Padawan Jedi de Anakin Skywalker, es un personaje principal en la película animada de 2008 Star Wars"
        }
        ,{
            titulo: "VS CODE",
            detalle: "Best Editor",
            texto: "Ahsoka Tano es un personaje de la franquicia Star Wars. Presentada como la Padawan Jedi de Anakin Skywalker, es un personaje principal en la película animada de 2008 Star Wars"
        }
        ,{
            titulo: "VS.NET CORE",
            detalle: "Best IDE",
            texto: "Ahsoka Tano es un personaje de la franquicia Star Wars. Presentada como la Padawan Jedi de Anakin Skywalker, es un personaje principal en la película animada de 2008 Star Wars"
        }
        ,{
            titulo: "UNITY",
            detalle: "Game Engine",
            texto: "Ahsoka Tano es un personaje de la franquicia Star Wars. Presentada como la Padawan Jedi de Anakin Skywalker, es un personaje principal en la película animada de 2008 Star Wars"
        }
    ];

    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";

    const contenedor = document.createElement("section");
    contenedor.classList.add("tarjetasExp-contenedor");

    arr.forEach(e => {
        const divExp = document.createElement("div");
        divExp.classList.add("tarjetasExp");

        const divFront = document.createElement("div");
        divFront.classList.add("tarjetasExp-front");

        const p1 = document.createElement("p");
        const strong = document.createElement("strong");
        strong.innerText = e.titulo;
        p1.appendChild(strong);
        divFront.appendChild(p1);

        const p2 = document.createElement("p");
        p2.innerText = e.detalle;
        divFront.appendChild(p2);

        divExp.appendChild(divFront);

        const p3 = document.createElement("p");
        p3.innerText = e.texto;
        divExp.appendChild(p3);

        contenedor.appendChild(divExp);

        divExp.addEventListener("mouseover", () => {
            divExp.children[0].classList.add("tarjetasExp-front_achicar");
        });
      
        divExp.addEventListener("mouseout", () => {
            divExp.children[0].classList.remove("tarjetasExp-front_achicar");
        });
    });

    demoContenedor.appendChild(contenedor);
};
