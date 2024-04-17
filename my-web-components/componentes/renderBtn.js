export default function renderBtn(txt) {
    const btnAgregar = document.createElement("button");
    btnAgregar.classList.add("btn");
    btnAgregar.classList.add("animacion");

    const span = document.createElement("span");
    span.innerText = txt;
    btnAgregar.appendChild(span);

    return btnAgregar;
}