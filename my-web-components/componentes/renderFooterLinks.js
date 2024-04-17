import Api from "../class/Api.js";
import renderLoading from "./renderLoading.js";

export default function renderFooterLinks() {
    const demoContenedor = document.querySelector("#demo-contenedor");
    demoContenedor.innerHTML = "";
    demoContenedor.appendChild(renderLoading());

    const api = new Api();

    Promise.all([
        // get data from Api -----------------------------------------
        api.getLinkCategAll().then(data => data),
        api.getLinkAll().then(data => data)
    ]).then(arr => {
        // render component ------------------------------------------
        demoContenedor.innerHTML = "";
        const footer = document.createElement("footer");

        arr[0].map(grp => {
            const div = document.createElement("div");
    
            const p = document.createElement("p");
            p.innerText = grp.nombre
            div.appendChild(p);
    
            const linksPorGrp = arr[1].filter(e => e.idLinkGrupo == grp.id)
    
            linksPorGrp.map(d => {
                const a = document.createElement("a");
                a.target = "_blank";
                a.href = d.link;
                a.innerText = d.nombre;
    
                div.appendChild(a);
            });
    
            footer.appendChild(div);
            demoContenedor.appendChild(footer);
        });
    });
};