<<<<<<< HEAD
const limit = 10;
let offset = 0;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}"><!-- Aqui seria eu pegando o tipo do pokemon--!>
            <span class="numero">#${pokemon.number}</span>
            <span class="nome">${pokemon.name}</span>

            <div class="detali">
                <ol class="types">
                ${pokemon.types.map((type) => 
                    `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
=======
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

>>>>>>> 01cf3b3 (Atualização)
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
<<<<<<< HEAD
    `;
}


const pokemonList = document.getElementById('pokemonList');
pokeApi.getPokemons().then((pokemons = []) => { // Corrigido o nome da função
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join(''); // Uso correto de innerHTML
});


=======
    `
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})
>>>>>>> 01cf3b3 (Atualização)

//for (let i = 0; i < pokemons.length; i++) {//Geito mais dificil de fazer 
//        const pokemon = pokemons[i];
//        pokemonList.innerHTML +=convetpokemontoli(pokemon)
//   }
//    })
//.catch((error) => console.error(error)) // Caso algo dê errado, exibe o erro no console



