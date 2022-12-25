import {Link} from 'react-scroll'
import React from "react";
import "./Navbar.css";
const Navbar = () => {
    return (
      <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left">
          <div className="n-name">Ready Hands</div>
          {/* <Toggle /> */}
        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              {/* <li>
                <Link to="services" spy={true} smooth={true}>
                 About
                </Link>
              </li> */}
              <li>
                <Link to="services" spy={true} smooth={true}>
                 Services
                </Link>
              </li>
            </ul>
          </div>
          <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Navbar;