import React from 'react';
import "../styles/navtabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  const pages = ['About', 'Portfolio', 'Resume', 'Contact'];

  return (
    <nav className="nav nav-tabs">
      {pages.map(page => (
        <li className="nav-item" key={page}>
          <a
            href={`#${page.toLowerCase()}`}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'nav-link active' : 'nav-link'}
            id={`nav-text-${page.toLowerCase()}`}
            role="button"
          >
            {page === 'About' ? 'About Me' : page}
          </a>
        </li>
      ))}
    </nav>
  );
}

export default NavTabs;