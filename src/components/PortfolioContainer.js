import React, { useState } from 'react';
import NavTabs from './NavTabs';
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
    // switch(any) {
    //   case currentPage === 'About':
    //     return <About />
    //     break;
    //   case currentPage === 'Projects':
    //     return <Projects />
    //   case currentPage === 'Resume':
    //     return <Resume />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <h1 id='name'>Jonah Milner</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {renderPage()}      
      <footer>
        <h5 id='footer'>Created by: Jonah Milner</h5>
      </footer>
    </div>
  );

