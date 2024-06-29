/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const maxPageNumbersToShow = 3;

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);
  const visiblePageNumbers = pageNumbers.slice(startPage - 1, endPage);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a 
            className="page-link" 
            href="#"
            aria-label="Previous"
            onClick={() => currentPage !== 1 && paginate(currentPage - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {visiblePageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <a 
              className="page-link" 
              href="#"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <a 
            className="page-link" 
            href="#"
            aria-label="Next"
            onClick={() => currentPage !== totalPages && paginate(currentPage + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
