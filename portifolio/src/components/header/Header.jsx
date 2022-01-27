import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./header.scss"
import hamburger_menu from "../../images/icons8-menu-64.png"
import logo from "../../images/logo.svg"

const Header = () => {
    const [colourChange, setColourChange] = useState(false);
    const changeNavbarColour = () => {
        if(window.scrollY >=10){
            setColourChange(true)
        }
        else{
            setColourChange(false)
        }
    }
    window.addEventListener('scroll', changeNavbarColour)
  return <div className={colourChange ? 'header colourChange' : 'header'}>
      <div className="container">
          <nav>
              <div className='logo'>
                  <Link to="#">
                  <img src={logo} className='logo_svg' alt="" />

                  </Link>
              </div>

              

        <ul className='ul-items'>
           <li>
               <Link to="#">Home</Link>
           </li>
           <li>
               <Link to="#">About</Link>
           </li>
           <li>
               <Link to="#">Services</Link>
           </li>
           <li>
               <Link to="#">Projects</Link>
           </li>
           <li className='hire'>
               <Link to="#">Hire Me</Link>
           </li>
           
        </ul>

              <div className="collapse">
                  <img src={hamburger_menu} alt="" />
              </div>
          </nav>
      </div>

      </div>;
};

export default Header;
