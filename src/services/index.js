const baseUrl = 'https://pokeapi.co/api/v2/';
const baseImagesUrl = 'https://pokeres.bastionbot.org/images/pokemon/';

const getPokemonId = (url) => {
  return url.split(`${baseUrl}pokemon/`)[1].split('/')[0];
}

const getPokemonImage = (url = null, id = null) => {
  if (url !== null) return `${baseImagesUrl}${getPokemonId(url)}.png`;
  if (id !== null) return `${baseImagesUrl}${id}.png`;
  
  return;
}

const getAllPokemons = async () => {
  return await new Promise((resolve, reject) => {
    fetch(`${baseUrl}pokemon?limit=151`)
    .then(response => response.json())
    .then(data => resolve(data.results))
    .catch(error => reject(error))
  });
}

const getPokemonData = async (pokemonUrl) => {
  return await new Promise((resolve, reject) => {
    fetch(pokemonUrl)
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error))
  })
}

const searchById = (id, items) => {
  return items.filter(item => id === getPokemonId(item.url));
}

const searchByString = (words, items) => {
  return items.filter(item => {
    const search =  item.name.toLowerCase().indexOf(words.toLowerCase());
    if (search !== -1) return item;
    return false;
  });
}

export const PokemonService = { 
  getPokemonId,
  getPokemonImage,
  getAllPokemons,
  getPokemonData,
  searchById,
  searchByString
}