import { renderNavBar } from "./renderNavBar.js";

export default function renderNavBarParalax() {
    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";

    const section = document.createElement("section");
    section.classList.add("paralax");

    section.appendChild(renderNavBar());

    demoContenedor.appendChild(section);
}