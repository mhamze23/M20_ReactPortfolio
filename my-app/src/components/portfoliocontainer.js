import React, { useState } from 'react';
import NavTabs from './navtabs';
import About from './pages/about';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Footer from './footer';
import Header from './header'


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // Renders the corresponding component based on the value of 'currentPage'
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  // Updates the value of 'currentPage' based on the selected page
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </Header>
        {renderPage()}
      <Footer />
    </div>
  );
}