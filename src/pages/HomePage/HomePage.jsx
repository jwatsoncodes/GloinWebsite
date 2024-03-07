// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './HomePage.css'; // Import the CSS file

// Define your HomePage component
function HomePage() {
  return (
    <div>

<Link to="/HomePage">
          <button>Tour</button>
        </Link>
        <Link to="/AboutPage">
          <button>
            About
          </button>
        </Link>
        <Link to="/MerchPage">
          <button>Merch</button>
        </Link>
        <Link to="/ContactPage">
          <button>Contact</button>
        </Link>

        
      <h2 className="tour-dates-heading">UPCOMING DATES</h2>
      {/* List of tour dates */}
      <ul className="tour-dates-list">
        <li className="tour-date">
          <strong>2024-05-02</strong> - Quebec, QC - Le Nuits Psychédéliques
        </li>
        <li className="tour-date">
          <strong>2024-06-27</strong> - London, ON - Punk Rock Flea Market
        </li>
        {/* Add more tour dates as needed */}
      </ul>
      
      {/* Back button */}
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
}

export default HomePage;


