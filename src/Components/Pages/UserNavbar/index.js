import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
 
} from './NavbarElements';
import "./UserNav.css"

const UserNavbar = () => {
  return (
    <>
      <Nav >
        <NavLink  className="usernav justify-content-lg-start"  to='/'>
          Ready Hands
        </NavLink>
        <Bars />
        <NavMenu className='navmenu'>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/sigin' activeStyle>
            Sign In
          </NavLink>
          <NavLink to='/signup' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default UserNavbar;
