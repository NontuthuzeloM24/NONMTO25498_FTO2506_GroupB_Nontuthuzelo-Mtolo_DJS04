/**
 * Pagination component
 * @param {Object} props
 * @param {number} props.currentPage
 * @param {Function} props.setCurrentPage
 * @param {number} props.totalPages
 */
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

