import React from 'react';
import "../styles/header.css"

function Header({ name, children }) {
  return (
    <header className="header-container">
        <div>
            <span className="header-name">{name}</span>
        </div>
        {children && children}
    </header>
  );
}

export default Header;
