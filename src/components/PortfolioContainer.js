// Adding this comment here because I'm not sure where else to add it, but why did I nest my pages folder in my components folder?? Why did I think this was a good idea?


import React, { useState } from "react";
import Nav from "./NavTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Projects";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Projects") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
      // I NEED TO ADD A SWITCH CASE HERE INSTEAD OF THE PATENTED IF LOOP
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <h1 id="name">Jonah Milner</h1>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {renderPage()}
      <footer>
        <h5 id="footer">Created by: Jonah Milner</h5>
      </footer>
    </div>
  );
}
