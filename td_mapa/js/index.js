$("area").hover(function () {
    $(this).toggleClass('arriba').siblings().toggleClass('abajo');

    dataRegiones.map((d, index) => {
        if (d.id == this.id) {
            let newElement = `<img src="${d.link}" class="card-img-top shadow" alt="...">`;
            newElement = newElement + `<div class="card-body">`;
            newElement = newElement + `<h5 class="card-title">Región: ${d.nombre}</h5>`;
            newElement = newElement + `<p class="card-text" id="atractivos">Atractivos: ${d.atractivo}</p></div>`;

            $(".card").html(newElement);
            $("#idRegion").text(d.id);
        }
    });

    $(".container").addClass("container_noOculto");
});

$("#btnGuardar").click(() => {
    let tarjeta = $(".card-modificar").children();
    console.dir(tarjeta);

    dataRegiones.find((d) => { 
        if (d.id == tarjeta[0].textContent) {
            console.log(tarjeta[1].value);
            d.nombre = tarjeta[2].value;
            d.atractivo = tarjeta[3].value;
        }
    });
});