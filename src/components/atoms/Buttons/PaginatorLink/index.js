import './styles.scss';

const PaginatorLink = ({ page, rowsPerPage, setPagination, activePage}) => {
  const start = (page * rowsPerPage) - rowsPerPage;
  const end = page * rowsPerPage;

  return <a 
    className={ `link ${activePage === page ? 'active' : ''}`}
    onClick={ () => setPagination({ start, end, activePage: page }) }> 
    { page }
  </a>
}

export default PaginatorLink;