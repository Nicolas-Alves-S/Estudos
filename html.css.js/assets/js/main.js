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
                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `;
}


const pokemonList = document.getElementById('pokemonList');
pokeApi.getPokemons().then((pokemons = []) => { // Corrigido o nome da função
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join(''); // Uso correto de innerHTML
});



//for (let i = 0; i < pokemons.length; i++) {//Geito mais dificil de fazer 
//        const pokemon = pokemons[i];
//        pokemonList.innerHTML +=convetpokemontoli(pokemon)
//   }
//    })
//.catch((error) => console.error(error)) // Caso algo dê errado, exibe o erro no console



