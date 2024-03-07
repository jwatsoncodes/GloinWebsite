import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import './App.css';

function App() {
  return (
    <>
      <div>
          <img src="https://dominionated.ca/wp-content/uploads/2022/10/gloin-we-found-this.jpeg" className="logo" alt="Your Image" />
      </div>
      <h1>Gloin</h1>
      <div className="card">
        {/* Add Link to navigate to HomePage */}
        <Link to="/HomePage">
          <button>Tour</button>
        </Link>
        <Link to="/AboutPage">
          <button>
            About
          </button>
        </Link>
        <Link to="/ContactPage">
          <button>Contact</button>
        </Link>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  );
}

export default App;

