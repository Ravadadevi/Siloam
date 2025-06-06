import React from 'react';
import './events.css'; //
import Header from './Header';
import { NavLink } from "react-router-dom";

import { useState } from 'react';

const Events = () => {

        const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
      
        const toggleMobileMenu = () => {
          setMobileMenuOpen(!isMobileMenuOpen);
        };
        
    
    return (
      <>
      {/* church logo and menu starts here */}
      <div className="main">
      <Header />
  
        {/* church logo and menu ends here */}

  

<div className="events">
    <h1>EVENTS</h1>
</div>



        <div className="coming">
            <h1>Events: Coming soon…</h1>
            <div className="card1">
                <div className="card">
                    <div className="image">
                        <img src="/image10.jpg" alt=""  />
                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Good Friday
                            </span>
                        </a>
                        <p className="desc">
                            6:00 pm 18/04/2025
                        </p>
                       
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                    <img src="/image.jpeg" alt=""  />

                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Easter Sunday
                            </span>
                        </a>
                        <p className="desc">
                            9:30 am 20/04/2025
                        </p>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                    <img src="/image1.jpg" alt="" />

                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Easter Sunday
                            </span>
                        </a>
                        <p className="desc">
                            11:30 am 20/04/2025
                        </p>
                       
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                    <img src="/image2.jpeg" alt="" />
                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Christmas Eve
                            </span>
                        </a>
                        <p className="desc">
                            7:00 pm 24/12/2025
                        </p>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                    <img src="/image3.jpeg" alt="" />

                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Pentecost Sunday
                            </span>
                        </a>
                        <p className="desc">
                            10:00 am 31/05/2025
                        </p>
                       
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                    <img src="/image4.jpeg" alt="" />
                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Ascension Day
                            </span>
                        </a>
                        <p className="desc">
                            6:00 pm 29/05/2025
                        </p>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="/image5.jpeg" alt="" />
                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                All Saints' Day
                            </span>
                        </a>
                        <p className="desc">
                            10:00 am 01/11/2025
                        </p>
                        
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                    <img src="/image6.jpeg" alt="" />

                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Palm Sunday
                            </span>
                        </a>
                        <p className="desc">
                            9:00 am 13/04/2025
                        </p>
                       
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="/image11.avif" alt="" />
                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Trinity Sunday
                            </span>
                        </a>
                        <p className="desc">
                            10:30 am 08/06/2025
                        </p>
                       
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                    <img src="/image7.jpeg" alt="" />

                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Ash Wednesday
                            </span>
                        </a>
                        <p className="desc">
                            4:00 pm 15/10/2025
                        </p>
                       
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                    <img src="/image8.jpeg" alt="" />

                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Candlemas
                            </span>
                        </a>
                        <p className="desc">
                            6:00 pm 02/02/2025
                        </p>
                      
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                    <img src="/image9.jpeg" alt="" />


                    </div>
                    <div className="content">
                        <a href="#">
                            <span className="title">
                                Maundy Thursday
                            </span>
                        </a>
                        <p className="desc">
                            7:00 pm 17/04/2025
                        </p>
                       
                    </div>
                </div>

            </div>
        </div>

           <div className="footer">
            <br /> 
            <div className="foot">
              <div>
                          <img src="/jesuschrist.jpeg" alt="" />
              </div>
                <div className="reach">
                <h4>Reach us</h4>
                <p><i className='bx bxs-phone'></i>+91 9000832512 <br />   +91 9963065687</p>
                <p><i className='bx bx-envelope' ></i> joelvarigeti77@gmail.com</p>
                </div>

                <div className="pages">
                    <h4>Pages</h4>
                     <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/team">Team</NavLink></li>
          <li><NavLink to="/location">Location</NavLink></li>
          <li><NavLink to="/ourtrust"> Programs</NavLink></li>
          <li><NavLink to="/events">Events</NavLink></li> 
                </div>

                <div className="icons">
                    <h4>Follow </h4>
<ul className="example-2">
 
  <li className="icon-content">
    <a
      href="https://www.instagram.com/joelvarigeti77?igsh=MXRsZ2dtdWhtaWw1Mw=="
      aria-label="Instagram"
      data-social="instagram"
    >
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-instagram"
        viewBox="0 0 16 16"
        xml:space="preserve"
      >
        <path
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">Instagram</div>
  </li>
  <li className="icon-content">
    <a href="https://youtube.com/@joelsilence?si=x9EuYdmUIxu3ri8p" aria-label="Youtube" data-social="youtube">
      <div className="filled"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-youtube"
        viewBox="0 0 16 16"
        xml:space="preserve"
      >
        <path
          d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
          fill="currentColor"
        ></path>
      </svg>
    </a>
    <div className="tooltip">Youtube</div>
  </li>
</ul>

                </div>
          
        </div>
        <hr />
              <div className="copy">
                <p>Lomaa IT Solutions</p>
                <p>© 2025 siloam Church. All rights reserved.</p>
        </div>
    
    
</div>
</div>

       
        </>
    );
};

export default Events;
