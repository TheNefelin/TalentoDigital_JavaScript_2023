export default function renderCarrito() {
    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";

    const btn = document.createElement("button");
    btn.classList.add("carrito");

    const img = document.createElement("img");
    img.src="./img/cart.svg";
    btn.appendChild(img);

    const span = document.createElement("span");
    span.classList.add("carrito-cont");
    span.innerText = (0);

    btn.appendChild(span);

    demoContenedor.appendChild(btn);
}