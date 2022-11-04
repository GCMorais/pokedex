import '../style.css'
import '../reset.css'
import '../components/pokedex.css'

document.querySelector('#app').innerHTML = `
  <section class="content"> 
    <h1>Pokédex</h1>
    <ol class="pokemons">
      <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">Bulbasaur</span>

        <div class="detail">
          <ol class="types">
            <li>grass</li>
            <li>poison</li>
          </ol>
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' alt='Bulbasaur'>
        </div>
      </li>
      <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">Bulbasaur</span>

        <div class="detail">
          <ol class="types">
            <li>grass</li>
            <li>poison</li>
          </ol>
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' alt='Bulbasaur'>
        </div>
      </li>
      <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">Bulbasaur</span>

        <div class="detail">
          <ol class="types">
            <li>grass</li>
            <li>poison</li>
          </ol>
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' alt='Bulbasaur'>
        </div>
      </li>
      <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">Bulbasaur</span>

        <div class="detail">
          <ol class="types">
            <li>grass</li>
            <li>poison</li>
          </ol>
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg' alt='Bulbasaur'>
        </div>
      </li>
      
    </ol>
  </section>
`

const btnTest = document.querySelector('.btn-teste');

btnTest.addEventListener('click',() => {
    alert('Clicou');
});




