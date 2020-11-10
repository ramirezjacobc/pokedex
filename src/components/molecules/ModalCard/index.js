import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Tag, TagGroup, Toggle } from 'rsuite';
import { PokemonService } from '../../../services';
import RangeSlider from '../../atoms/RangeSlider';
import { getChartData } from '../../../services/utils';
import './styles.scss'

const {
  getPokemonImage
} = PokemonService

const ModalCard = ({ id, name, height, weight, types, stats, closeModal }) => {
  const [showChart, setShowChart] = useState(false)
  const [chart, setChart] = useState({options: {}, series: []})
  
  useEffect(() => {
    setChart(getChartData(stats));
  }, []);

  const handleChange = (status) => {
    setChart(getChartData(stats));
    setShowChart(status);
  }

  return <div className='modal-card'>
    <div className='modal-card__close' onClick={ closeModal }> X </div>

    <div className='modal-card__heading'>
      <img 
        src={ getPokemonImage(null, id) } 
        alt={ name } 
      />
      <div className='modal-card__data'>
        <div>
          <span className='modal-card__tag'>{ `#${'1'.padStart(3, 0)}` }</span>
          <h2 className='modal-card__title'>{ name }</h2>
          <div className='modal-card__types'>
            <TagGroup>
              { types.map(({ type }, index) => <Tag color='green'>{ type.name }</Tag>)}
            </TagGroup>
          </div>
        </div>
        <div>
          <span><b>Height:</b> { height }m</span>
          <span><b>Weight:</b> { weight }kg</span>
        </div>
      </div>
    </div>

    <div className='modal-card__body'>
      <h4>STATISTICS</h4>
      { !showChart && <div>
        { stats.map((item, index) => { 
          return <div className='modal-card__stats'>
            <div>
              <span>{ item.stat.name }:</span> 
              <RangeSlider pokemonValue={ item.base_stat } />
            </div>
          </div>
        })}
      </div> }

      { showChart && <ReactApexChart
        options={chart.options}
        series={chart.series}
        type="radar" 
        height={350}
      /> }
    </div>

    <div className='modal-card__footer'>
      <span>Chart View </span>
      <Toggle size="md" onChange={ handleChange } />
    </div>
  </div>
}

export default ModalCard;