const offset = 0;//aqui estou definido a variavel como 0
const limit = 10;//aqui estou definido a variavel como 10
//defini as variavel que futuramente posso fazer mais pagina puxando as informacoes da api com essa variavel.
const url = `https://pokeapi.co/api/v2/pokemon?offset${offset}&limit=${limit}`

    .fetch(url).then(function (response) {
        console.log(response)
    })
    .catch(function(error){
        console.error(error);
    
})
.finally(function(){
    console.log('Requisição concluĩda!')
})