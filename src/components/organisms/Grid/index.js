import Card from '../../molecules/Card';
import './styles.scss';

const Grid = ({start, end, items, handleOpenModal }) => {
  return <section className='grid'>
    { items.slice(start, end).map(({ name, url }, index) => <div 
      className='grid__item'
      onClick={ () => handleOpenModal(url) }
      key={ index }>
      <Card 
        key={ index }
        url={ url }
        name={ name }
      />
    </div> )}
  </section> 
}

export default Grid;