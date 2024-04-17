export default function renderCarrusel() {
    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";

    //espacio entre elementos
    const z = 250;

    //arreglo de algun origen de datos
    const arrImg = [
        { src: "./img/l-csharp.svg" },
        { src: "./img/t-vs-studio.svg" },
        { src: "./img/l-css.png" },
        { src: "./img/t-git.svg" },
        { src: "./img/t-sql-server.png" },
        { src: "./img/l-html.png" },
        { src: "./img/t-vs-code.png" },
        { src: "./img/t-unity.png" },
        { src: "./img/l-javascript.svg" },
        { src: "./img/t-react.svg" }
    ];

    const section = document.createElement("section");
    section.classList.add("carrusel-contenedor");

    const box =  document.createElement("div");
    box.classList.add("box");

    //calculo para separar los elementos en su propio angulo
    let i = 1;
    let deg = 360 / arrImg.length;
    
    arrImg.forEach(e => {
        const span =  document.createElement("span");
        span.style = `--i:${i}; --deg:${deg}deg; --z:${z}px`;

        const img = document.createElement("img");
        img.src = e.src;

        span.appendChild(img);
        box.appendChild(span);

        i += 1;
    });

    section.appendChild(box)

    demoContenedor.appendChild(section);
}