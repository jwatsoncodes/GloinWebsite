// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import CSS file

const NavBar = () => {
  return (
    <nav>
      <Link to="/HomePage" className="navbar-link">
        Tour
      </Link>
      <Link to="/AboutPage" className="navbar-link">
        About
      </Link>
      <Link to="/MerchPage" className="navbar-link">
        Merch
      </Link>
      <Link to="/ContactPage" className="navbar-link">
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
