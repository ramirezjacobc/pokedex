import React, { useEffect, useState } from 'react';
import { Slider } from 'rsuite';
import { getAllLabels } from '../../../services/utils';
import 'rsuite/dist/styles/rsuite-default.css';
import './styles.scss';

function RangeSlider({ pokemonValue }) {
  const [labels, setLabels] = useState([]);
  const handleStyle = {
    fontSize: 12,
    width: 45,
    height: 24
  };

  useEffect(() => {
    setLabels(getAllLabels);
  }, []);

  return <div>
    <div className='range-slider'>
      <Slider
        min={ 0 }
        max={ labels.length - 1 }
        value={ pokemonValue }
        className="custom-slider"
        handleStyle={ handleStyle }
        tooltip={ false }
        handleTitle={ labels[pokemonValue] }
        progress
      />
    </div>
  </div>
}

export default RangeSlider;