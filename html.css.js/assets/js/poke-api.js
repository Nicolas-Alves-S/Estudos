const pokeApi = {}//definino a variavel 

function convertPokeApiDetailToPokemon(pokeDetail) {//aqui estou pegando as informacoes
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id//aqui ta puxando o numero dele com o caminho que estar localizado o numero 
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}
pokeApi.getPokemonsDetails = (pokemon) => {//aqui ta trasformando o que foi puxado la em cima como tabela
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results) // Evita erro caso results seja undefined        
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

