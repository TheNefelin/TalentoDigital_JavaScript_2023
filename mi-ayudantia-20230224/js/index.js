import { Promedio  } from "../class/Promedio.js";

const prom = new Promedio()

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
    const txtNum = document.querySelector(".txtNum");
    const etiquetas = document.querySelectorAll("label");
    const txtForm = document.querySelectorAll("form input")
    console.log(txtForm)

    if (txtNum.valueAsNumber > 0 && txtNum.valueAsNumber <= 7) {
        prom.setNota(txtNum.valueAsNumber)
    } else {
        alert("Ingrese una Nota Valida")
    }
  
    etiquetas[0].innerText = `Notas: ${prom.getNotas()}`
    etiquetas[1].innerText = `Promedio: ${prom.getPromedio()}`
});