/*Seleciona os elementos html*/
const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form'); /*seleciona um elemento HTML com base em um seletor CSS*/
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1; /*A busca dos pokemons inicia com o 1*/

// Uso do FETCH 
const fetchPokemon = async (pokemon) => { /*recebe o nome de um pokemon como argumento*/
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`); /*busca esse pokemon na api pokéAPI*/

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...'; /*mensagem de carregamento*/
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon); /*depois chama o fetch para pegar informações do pokemon inserido*/

  if (data) { /*se tiver esse pokemon*/
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Não Encontrado :c';
    pokemonNumber.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => { /*Ouvinte para o submit do elemento form*/
  event.preventDefault(); /*evitar que o comportamento padrão do formulário ocorra*/
  renderPokemon(input.value.toLowerCase()); /*converte pra letras minusculas o que estava no input*/
});

buttonPrev.addEventListener('click', () => { /*adiciona um ouvinte ao clique do botão e vai pro pokemon anterior*/
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click', () => { /*adiciona um ouvinte ao clique do botão e vai pro pokemon posterior*/
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);