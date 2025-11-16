import React from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div style={{ margin: "1rem" }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          style={{
            margin: "0 5px",
            fontWeight: page === currentPage ? "bold" : "normal",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
