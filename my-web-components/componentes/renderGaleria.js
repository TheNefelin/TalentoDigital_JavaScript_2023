export default function renderGaleria() {
    const arrImg = [
        { src: "./img/l-csharp.svg" },
        { src: "./img/t-dotnet.svg" },
        { src: "./img/t-vs-studio.svg" },
        { src: "./img/t-git.svg" },
        { src: "./img/t-mysql.svg" },
        { src: "./img/l-javascript.svg" },
        { src: "./img/t-react.svg" }
    ];

    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";

    const section = document.createElement("section");
    section.classList.add("galeria-contenedor");

    arrImg.forEach(e => {
        const img = document.createElement("img");
        img.src = e.src;

        section.appendChild(img);
    });

    demoContenedor.appendChild(section);
};