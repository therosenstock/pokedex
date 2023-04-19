const pokemonList = document.getElementById('pokemonList')
const button = document.getElementById('loadMoreBtn')
const limit = 12;
let offset = 0;
const maxRecords = 151;

/**
 * @typedef {Object} Pokemon
 * @property {string} name
 * @property {Number} number
 * @property {string} type
 * @property {Array} types
 * @property {string} photo
 */


/**
 * @param {Pokemon} pokemon
 * @returns {string} Retorna HTML
 */
function PokemonCard(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number"> #${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" 
            alt="${pokemon.name}">
        </div>
    </li>`
}

function loadPokemonItens(offset, limit){
pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newList = pokemons.map(PokemonCard).join('');
    pokemonList.innerHTML += newList;
    })
}
loadPokemonItens(offset, limit);

button.addEventListener('click', () => {
    offset += limit;
    const qtdRecord = offset + limit;
    if(qtdRecord >= maxRecords){
        const newLimit = qtdRecord - maxRecords;
        loadPokemonItens(offset, newLimit);

        button.parentElement.removeChild(button);
    
    } else{
        loadPokemonItens(offset, limit)
    }
    
    
})
