// Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer>
            {/* Footer content */}
            <div className="footer-icons">
                {/* Copyright information */}
                <p>&copy; {new Date().getFullYear()} Gloin</p>
                {/* Social media icon */}
                <a href="https://facebook.com/gloinxo">
                    <img src='./socialmedia.gif' alt="Facebook" className='gif' />
                </a>
                <a href="https://instagram.com/gloinxo">
                    <img src='./socialmedia.gif' alt="Instagram" className='gif' />
                </a>
            </div>
        </footer>
    );
};


export default Footer;
