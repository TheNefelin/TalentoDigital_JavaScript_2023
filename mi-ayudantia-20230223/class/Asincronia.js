export function Asincronia() {
    const txtNumPM = document.querySelector("#txtNumPM")

    if (txtNumPM.value) {
        getPokemon(txtNumPM.value).catch(err => console.log(err))    
    };
};

async function getPokemon(num) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
    if (res.ok) {
        const data = await res.json();

        const img = document.querySelector(".imgPokemon");
        img.src = data.sprites.front_default
    } else {
        console.log("Pokemon no Encontrado");
    }
}