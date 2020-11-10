import PaginatorLink from '../../atoms/Buttons/PaginatorLink';
import './styles.scss';

const Paginator = ({ pages, rowsPerPage, setPagination, activePage }) => {
  return <ul className='paginator'>
    { pages > 1 && Array.apply(null, { length: pages }).map((e, i) => {
      return <li className='paginator__item' key={ i }>
        <PaginatorLink 
          page={ i + 1 }
          rowsPerPage={ rowsPerPage }
          setPagination={ setPagination }
          activePage={ activePage }
        />
      </li>
    })}
  </ul>
}

export default Paginator;