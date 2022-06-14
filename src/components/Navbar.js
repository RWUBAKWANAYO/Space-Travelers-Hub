import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => (

  <nav>
    <img src={logo} alt="logo" />
    <div>
      <ul>
        <li><NavLink to="./">Rockets</NavLink></li>
        <li><NavLink to="./missions">Missions</NavLink></li>
        <li><NavLink to="./myprofile">My Profile</NavLink></li>
      </ul>
    </div>
  </nav>

);

export default Navbar;
