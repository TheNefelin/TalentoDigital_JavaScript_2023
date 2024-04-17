export default function renderParalax() {
    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";

    const section = document.createElement("section");
    section.classList.add("paralax");

    demoContenedor.appendChild(section);
}