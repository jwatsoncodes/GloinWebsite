// HomePage.jsx
import React from 'react';
import './HomePage.css'; // Import the CSS file

// Define your HomePage component
function HomePage() {
  return (
    <div>
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
    </div>
  );
}

export default HomePage;

