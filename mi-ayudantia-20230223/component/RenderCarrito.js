export function RenderCarrito(dt) {
    const productosCarrito = document.querySelector(".productosCarrito");
    productosCarrito.innerHTML = ""

    dt.forEach(e => {
        const li = document.createElement("li");
        
        const btn = document.createElement("button");
        btn.value = e.id;
        btn.innerText = "X";

        const span = document.createElement("span")
        span.innerText = e.nombre

        li.appendChild(btn);
        li.appendChild(span);

        productosCarrito.appendChild(li);
    });
}