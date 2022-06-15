import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const navLinks = [
    { name: 'Rockets', path: '/', id: '1' },
    { name: 'Missions', path: '/missions', id: '2' },
    { name: 'My Profile', path: '/myprofile', id: '3' },
  ];
  return (
    <nav>
      <img src={logo} alt="logo" />
      <div>
        <ul>
          {navLinks.map((el) => <li key={el.id}><NavLink to={el.path} className={({ isActive }) => (isActive ? 'active-style' : 'none')}>{el.name}</NavLink></li>)}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
