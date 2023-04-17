const pokemonList = document.getElementById('pokemonList')

/**
 * @typedef {Object} Pokemon
 * @property {string} name
 */



/**
 * @param {Pokemon} pokemon
 * @returns {string} Retorna HTML
 */
function PokemonCard(pokemon) {
    return `
    <li class="pokemon">
        <span class="number"> #001</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="https://raw.githubusercontent.com/jnovack/pokemon-svg/3c3ea26da58331d7202e7cdb1aab9b8347d8587f/svg/1.svg" 
            alt="${pokemon.name}">
        </div>
    </li>`
}
pokeApi.getPokemons().then((pokemons) => {
    pokemonList.innerHTML += pokemons.map(PokemonCard).join('');
    })

