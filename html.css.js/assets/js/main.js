

function convetpokemontoli(pokemon){
    return`


            
            <li class="pokemon">
                <span class="numero">#001</span>
                <samp class="nome"> ${pokemon.name}</samp>

                <div class="detali">

                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f619ed0-b566-4538-8392-bf02ca7a76cd/dck5gop-42198a25-24ed-47b3-b061-17b61d933fdd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmNjE5ZWQwLWI1NjYtNDUzOC04MzkyLWJmMDJjYTdhNzZjZFwvZGNrNWdvcC00MjE5OGEyNS0yNGVkLTQ3YjMtYjA2MS0xN2I2MWQ5MzNmZGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SJag-8wJaCxlLc25L9bORY6Un2PKFOHS04hbbMh5O6U"
                        alt="${pokemon.name}">
                    </div>
            </li>
      

    `
}
const pokemonList = document.getElementById('pokemonList')

pokeApi.getpokens().then((pokemons =[]) => { // Aqui recebo os dados da API (a lista de Pokémon) e os armazeno na variável 'pokemonList'
        
    const novalista =pokemons.map((pokemon)=> {
        return convetpokemontoli(pokemon)
    }) 
    const novoHtml =novalista.join('')
    pokemonList.innerHTML +=novoHtml
        
    //for (let i = 0; i < pokemons.length; i++) {//Geito mais dificil de fazer 
    //        const pokemon = pokemons[i];
    //        pokemonList.innerHTML +=convetpokemontoli(pokemon)
     //   }
    })
    .catch((error) => console.error(error)) // Caso algo dê errado, exibe o erro no console

    