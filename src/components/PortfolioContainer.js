import React, { useState } from 'react';
import Nav from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Projects';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Projects') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <h1 id='name'>Jonah Milner</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {renderPage()}      
      <footer>
        <h5 id='footer'>Created by: Jonah Milner</h5>
      </footer>
    </div>
  );
}

