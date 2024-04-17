import renderNavBar from "../componentes/renderNavBar.js";
import renderParalax from "../componentes/renderParalax.js";
import renderNavBarParalax from "../componentes/renderNavBarParalax.js";
import renderGaleria from "../componentes/renderGaleria.js";
import renderCarrusel from "../componentes/renderCarrusel.js";
import renderTarjetaExt from "../componentes/renderTarjetaExt.js";
import renderCarrito from "../componentes/renderCarrito.js";
import renderAcordion from "../componentes/renderAcordion.js";
import renderFooterLinks from "../componentes/renderFooterLinks.js";
import renderAdminMesa, { moverElemento } from "../componentes/renderAdminMesa.js";
import { renderLoadin2 } from "../componentes/renderLoading.js";
import renderSlider from "../componentes/renderSlider.js";

window.onload = () => {
    inicializarBtns();
};

function inicializarBtns() {
    const btnSection = document.querySelector(".btnSection");
    btnSection.style.top = "25vh";
    btnSection.style.left = "20vw";
    moverElemento(btnSection);

    const btns = document.querySelectorAll(".btnSection > button");

    btns.forEach(e => {
        e.addEventListener("click", () => {
          renderElement(e.value);
        });
    });
};

function renderElement(id) {
    id == 1 ? renderNavBar() : false;
    id == 2 ? renderParalax() : false;
    id == 3 ? renderNavBarParalax() : false;
    id == 4 ? renderGaleria() : false;
    id == 5 ? renderCarrusel() : false;
    id == 6 ? renderTarjetaExt() : false;
    id == 7 ? renderCarrito() : false;
    id == 8 ? renderAcordion() : false;
    id == 9 ? renderFooterLinks() : false;
    id == 10 ? renderAdminMesa() : false;
    id == 11 ? renderLoadin2() : false;
    id == 12 ? renderSlider() : false;
};
