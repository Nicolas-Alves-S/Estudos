const pokeApi ={}
pokeApi.getpokens =(offset =0,limit =10)=>{
    //const offset = 0;//aqui estou definido a variavel como 0
    //const limit = 10;//aqui estou definido a variavel como 10
    //defini as variavel que futuramente posso fazer mais pagina puxando as informacoes da api com essa variavel.
    const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}&limit=${limit}`
    return fetch(url) // Aqui estou fazendo a requisição para a API usando a URL fornecida
    .then((response) => response.json()) // Aqui verifico se a requisição foi bem-sucedida e converto a resposta para JSON
    .then((jsonBody)=>jsonBody.results)
}