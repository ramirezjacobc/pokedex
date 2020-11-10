import ModalCard from '../../molecules/ModalCard';
import './styles.scss';

const Modal = ({ id, name, height, weight, types, stats, closeModal }) => {

  return <div>
    <div className='overlay' onClick={ closeModal }></div>
    <ModalCard 
      id={ id }
      name={ name }
      height={ height }
      weight={ weight }
      types={ types}
      stats={ stats }
      closeModal={ closeModal }/>
  </div>
}

export default Modal;