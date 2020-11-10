import logo from './assets/logo-pokemon.png';
import './styles.scss';

const Header = ({ searchPokemon }) => {
  const handleChange = (e) => {
    const {
      value
    } = e.target;
    searchPokemon(value)
  }

  return <header className='header'>
    <img src={ logo } alt='Pokedex' className='header__logo' />
    <div className='header__search-form'>
      <input 
        type='search'
        name='search'
        placeholder='Search by Keywords...'
        onChange={ handleChange }
      />
    </div>
  </header>
}

export default Header;