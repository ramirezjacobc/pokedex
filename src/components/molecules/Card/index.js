import { PokemonService } from '../../../services';
import './styles.scss';

const {
  getPokemonId,
  getPokemonImage
} = PokemonService

const Card = ({url, name}) => {
  return <div className="card">
    <div className='card__heading'>
      <img 
        src={ getPokemonImage(url) } 
        alt={ name } 
      />
    </div>
    <h3 className='card__title'>{ name }</h3>
    <span className='card__tag'>{ `#${getPokemonId(url).padStart(3, 0)}` }</span>
  </div>
}

export default Card;