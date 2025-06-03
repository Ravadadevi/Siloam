import React from "react";
import './Header.css';
import { useState } from "react";

const Header = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    
      const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
      };

    return (
            <div className="church">
      <div className="logoandmenu">
        <div className="logo">
          <img src="/logo.jpeg" alt="Church Logo" />
          <h1>
            SILOAM <em>CHRIST MINISTRIES </em> <br />
            <span>Come And Grow With Us</span>
          </h1>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className={`head ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/team">Team</a></li>
          <li><a href="/location">Location</a></li>
          <li><a href="/ourtrust"> Programs</a></li>
          <li><a href="/events">Events</a></li> 
          <button id='btnm1' onClick={() => window.location.href = '/give'}>
        Give Now
      </button>
        </ul>
      </div>

    </div>
    )
}

export default Header;
