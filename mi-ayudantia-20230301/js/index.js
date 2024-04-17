import { Rut } from "../class/Rut.js";
import { getPokemon } from "../class/ApiPokemon.js";

const btnPrueba = document.querySelector(".btnPrueba")
btnPrueba.addEventListener("click", () => {
    const txtRut = document.querySelector(".txtRut");
    const txtNumVer = document.querySelector(".txtNumVer");
    
    const numVer = new Rut();
    txtNumVer.value = numVer.getNumVerificador(txtRut.value);
    console.log(numVer)
});

const btnGetPokemon = document.querySelector(".cardPokemon > button");
btnGetPokemon.addEventListener("click", () => {
    const txtNumPokemon = document.querySelector(".cardPokemon > input");
    const img = document.querySelector(".cardPokemon > img");
    const h3 = document.querySelector(".cardPokemon > h3");

    if (parseInt(txtNumPokemon.value) > 0 && parseInt(txtNumPokemon.value) < 1009) {
        getPokemon(parseInt(txtNumPokemon.value)).then(data => {
            img.src = data.sprites.front_default;
            h3.textContent = data.name;
        });
    } else {
        h3.textContent = "Pokemon no Existe"
    };
});
