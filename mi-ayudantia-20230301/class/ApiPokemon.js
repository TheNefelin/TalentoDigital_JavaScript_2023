export async function getPokemon(num) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
    return await res.json();
};
