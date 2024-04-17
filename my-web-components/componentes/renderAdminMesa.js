import renderBtn from "./renderBtn.js"

export default function renderAdminMesa() {
    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";

    const objAbsolutoAdmin = document.createElement("section");
    objAbsolutoAdmin.classList.add("objAbsoluto-admin");

    const objAbsolutoMenu = document.createElement("div");
    objAbsolutoMenu.classList.add("objAbsoluto-menu");

    const input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = "Ingrese Título";

    const input2 = document.createElement("input");
    input2.type = "text";
    input2.placeholder = "Ingrese Descripción";

    const objAbsolutoAgregar = renderBtn("Agregar +");
    objAbsolutoAgregar.classList.add("objAbsoluto-agregar");
    objAbsolutoAgregar.addEventListener("click", () => {
        const txts = document.querySelectorAll(".objAbsoluto-menu > input");
        renderNewObjAbsoluto(txts[0].value, txts[1].value);
    });

    const msgeError = document.createElement("div");
    msgeError.classList.add("objAbsoluto-error");

    objAbsolutoMenu.appendChild(input1);
    objAbsolutoMenu.appendChild(input2);
    objAbsolutoMenu.appendChild(objAbsolutoAgregar);
    objAbsolutoMenu.appendChild(msgeError);
    objAbsolutoAdmin.appendChild(objAbsolutoMenu);

    const objAbsolutoContenedor = document.createElement("div");
    objAbsolutoContenedor.classList.add("objAbsoluto-contenedor");
    objAbsolutoAdmin.appendChild(objAbsolutoContenedor);

    demoContenedor.appendChild(objAbsolutoAdmin);
};

function renderNewObjAbsoluto(txt1, txt2) {
    const error = document.querySelector(".objAbsoluto-error");

    if (txt1 && txt2) {
        error.innerText = "";
    
        const objAbsoluto = document.createElement("span");
        objAbsoluto.classList.add("objAbsoluto");

        const div =  document.createElement("div");
        const strong =  document.createElement("strong");
        strong.textContent = txt1;
        div.appendChild(strong);
        objAbsoluto.appendChild(div);

        const span = document.createElement("span");
        span.innerText = txt2;
        objAbsoluto.appendChild(span);

        moverElemento(objAbsoluto);

        const objAbsolutoContenedor = document.querySelector(".objAbsoluto-contenedor");
        objAbsolutoContenedor.appendChild(objAbsoluto);
    } else {
        error.innerText = "Debe Ingresar Título y Descripción"
    }
}

export function moverElemento(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = elmnt.style.top, pos4 = elmnt.style.left;

    elmnt.onmousedown = seleccionarElemento;

    function seleccionarElemento(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmousemove = moverElemento;
        document.onmouseup = soltarElemento;
        // call a function whenever the cursor moves
    };
    
    function moverElemento(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    };
    
    function soltarElemento() {
        // stop moving when mouse button is released:
        document.onmousemove = null;
        document.onmouseup = null;
    };
};


