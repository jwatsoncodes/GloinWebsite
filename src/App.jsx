import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import './App.css';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="https://dominionated.ca/wp-content/uploads/2022/10/gloin-we-found-this.jpeg" className="logo" alt="Your Image" />
        </a>
      </div>
      <h1>Gloin</h1>
      <div className="card">
        {/* Add Link to navigate to HomePage */}
        <Link to="/HomePage">
          <button>Enter</button>
        </Link>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  );
}

export default App;

