import '../style.css'
import '../reset.css'
import '../components/pokedex.css'
import '../components/pokeapi'


function convertPokeLi(pokemon){
    return `<li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
      <ol class="types">
        <li>greese</li>
        <li>poison</li>
      </ol>
      <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' alt='${pokemon.name}'>
    </div>
  </li>`;
}

const pokemonList = document.querySelector('#pokemonList');



pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokeLi).join('')
})


