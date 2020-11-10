import React, { useEffect, useState } from 'react';
import { PokemonService } from '../../../services';
import Paginator from '../../molecules/Paginator';
import Grid from '../../organisms/Grid';
import Header from '../../organisms/Header';
import Modal from '../../organisms/Modal'
import './styles.scss';

const {
  getAllPokemons,
  getPokemonData,
  searchById,
  searchByString
} = PokemonService

function Pokedex() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [pages, setPages] = useState(1);
  const [pagination, setPagination] = useState({ start:0, end: 18, activePage: 1 });
  const [pokemonData, setPokemonData] = useState({});
  const [showModal, setModal] = useState(false);
  const [alertError, setAlertError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    getAllPokemons()
      .then(data => {
        setItems(data);
        setPages(Math.ceil(data.length / 18));
        return;
      })
      .catch(error => setItems([]));
  }, [])

  const handleOpenModal = (pokemonUrl) => {
    getPokemonData(pokemonUrl)
      .then(data => {
        setPokemonData(data);
        setModal(true);
        return;
      })
      .catch(error => setAlertError(true))
  }

  const searchPokemon = (search) => {
    if (search.length === 0) {
      setIsSearching(false);
      setPages(Math.ceil(items.length / 18));
      setFilteredItems([]);
      return
    }

    if(!isNaN(search)) return applySearch(searchById(search, items));

    if (search.length > 2) applySearch(searchByString(search, items));
  }

  const applySearch = (data) => {
    setFilteredItems(data);
    setPages(Math.ceil(data.length / 18));
    setPagination({ start:0, end: 18, activePage: 1 })
    setIsSearching(true);

    return;
  }

  return <div className='container'>
    <Header searchPokemon={ (search) => searchPokemon(search)} />

    <section>
      { alertError && 'There was a problem loading pokemon data. please try again.'}

      { showModal && <Modal 
        id={ pokemonData.id }
        name={ pokemonData.name }
        height={ pokemonData.height }
        weight={ pokemonData.weight }
        types={ pokemonData.types}
        stats={ pokemonData.stats }
        closeModal={ () => setModal(false) }
      /> }

      <Grid 
        items={ isSearching ? filteredItems : items } 
        start={ pagination.start} 
        end={ pagination.end } 
        handleOpenModal={ pokemonUrl => handleOpenModal(pokemonUrl) }
      />
      
      <Paginator
        rowsPerPage={ 18 }
        pages={ pages }
        setPagination={ setPagination }
        activePage={ pagination.activePage }
      />

    </section>
  </div>
}

export default Pokedex;