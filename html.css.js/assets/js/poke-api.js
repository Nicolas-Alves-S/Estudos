const pokeApi = {} // Criando um objeto para armazenar funções relacionadas à API do Pokémon

function convertPokeApiDetailToPokemon(pokeDetail) {

    const pokemon = new Pokemon()// Criando uma instância do objeto Pokemon

    pokemon.number = pokeDetail.id// Atribuindo o número do Pokémon (ID da API)
    
    // Atribuindo o nome do Pokémon
    pokemon.name = pokeDetail.name

    // Extraindo a lista de tipos do Pokémon
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types // Pegando o primeiro tipo (caso tenha mais de um)

    // Definindo os tipos do Pokémon
    pokemon.types = types
    pokemon.type = type // Definindo o tipo principal

    // Pegando a URL da imagem do Pokémon
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonsDetails = (pokemon) => {
    // Fazendo uma requisição para obter detalhes do Pokémon
    return fetch(pokemon.url)
        .then((response) => response.json()) // Convertendo a resposta para JSON
        .then(convertPokeApiDetailToPokemon) // Convertendo os dados para o modelo Pokemon
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    // Criando a URL para buscar uma lista de Pokémons com base no offset e limite
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json()) // Convertendo a resposta para JSON
        .then((jsonBody) => jsonBody.results) // Extraindo a lista de Pokémons
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetails)) // Mapeando para obter detalhes de cada Pokémon
        .then((detailRequests) => Promise.all(detailRequests)) // Resolvendo todas as promessas
        .then((pokemonsDetails) => pokemonsDetails) // Retornando a lista de Pokémons detalhados
}
