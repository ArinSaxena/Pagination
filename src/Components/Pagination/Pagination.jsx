import { useState } from "react";
import "Components/Pagination/Pagination.css";

const Pagination = ({
  totalPages,
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const maxDisplayPages = 5;

  //  start and end pages for display range
  let startPage = Math.max(1, currentPage - Math.floor(maxDisplayPages / 2));
  let endPage = startPage + maxDisplayPages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxDisplayPages + 1);
  }

  const pageNumber = [];
  // for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {  //for total pages
  //   pageNumber.push(i);
  // }

  for (let i = startPage; i <= endPage; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="pagination-container">
      <div className="pagination">
        <button onClick={() => setCurrentPage(1)}>⬅️</button>

        <button
          className="previous-btn"
          style={{ width: "70px" }}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {pageNumber.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </button>
        ))}

        <button
          className="next-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

        <button onClick={() => setCurrentPage(totalPages)}>➡️</button>
      </div>
    </div>
  );
};

export default Pagination;
