const limit = 10;
let offset = 0;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="numero">#001</span>
            <span class="nome">${pokemon.name}</span>

            <div class="detali">
                <ol class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ol>
                <img src="https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2014/08/bulbasaur.png?fit=958%2C834&ssl=1"
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



