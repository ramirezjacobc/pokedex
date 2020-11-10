import Card from '../../molecules/Card';
import './styles.scss';

const Grid = ({start, end, items, handleOpenModal }) => {
  return <section className='grid'>
    { items.length > 0 && items.slice(start, end).map(({ name, url }, index) => <div 
      className='grid__item'
      onClick={ () => handleOpenModal(url) }
      key={ index }>
      <Card 
        key={ index }
        url={ url }
        name={ name }
      />
    </div> )}

    { items.length === 0 && <blockquote><br/><b/><b>No data available</b></blockquote> }
  </section> 
}

export default Grid;