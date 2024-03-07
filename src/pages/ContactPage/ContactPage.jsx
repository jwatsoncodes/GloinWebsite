// ContactPage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ContactPage.css'; // Import the CSS file

// Define your ContactPage component
function ContactPage() {
  return (
    <div>

      {/* Image */}
      {/* <img src="https://images.squarespace-cdn.com/content/v1/5b326c5bb40b9df04392b913/d2544fd0-1c7a-473a-ad29-801834dc25f0/Gloin+1+-+Credit+1upcloud+%28Alex+Carre%29.jpg?format=2500w" alt="Gloinband" className="about-image" /> */}
      {/* MOTHLAND section */}
      <p className="mothland-section">
        <strong>MOTHLAND:</strong> <a href="https://www.mothland.com/gloin" target="_blank">www.mothland.com/gloin</a>
      </p>
      {/* Contact information */}
      <p className="about-contact">
        CONTACT:<br />
        QC: <a href="mailto:marilyne@mothland.com">marilyne@mothland.com</a><br />
        CAN/US: <a href="mailto:juliana@mothland.com">juliana@mothland.com</a><br />
        OR DIRECTLY: <a href="mailto:gloinxo@gmail.com">gloinxo@gmail.com</a>
      </p>

      {/* Back button */}
      <Link to="/" className="back-button">Home</Link>
    </div>
  );
}

export default ContactPage;


