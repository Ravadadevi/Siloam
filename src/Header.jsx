import React from "react";
import './Header.css';
import { useState } from "react";
import { NavLink,Link } from 'react-router-dom';



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
            <span>Come and Grow With Us</span>
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
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/team">Team</NavLink></li>
          <li><NavLink to="/location">Location</NavLink></li>
          <li><NavLink to="/ourtrust"> Programs</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li> 
         <li>
  <Link to="/give" id="btnm1">
    Give Now
  </Link>
</li>


        </ul>
      </div>

    </div>
    )
}

export default Header;
