import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import classes from './Navbar.module.css';

const Navbar = () => {
  const navLinks = [
    { name: 'Rockets', path: '/', id: '1' },
    { name: 'Missions', path: '/missions', id: '2' },
    { name: 'My Profile', path: '/myprofile', id: '3' },
  ];
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img className={classes.logoImage} src={logo} alt="logo" />
        <p> Space Travelers Hub </p>
      </div>
      <div>
        <ul className={classes.navLinks}>
          {navLinks.map((el) => (
            <li className={classes.navLink} key={el.id}>
              <NavLink
                to={el.path}
                className={({ isActive }) => (isActive ? classes.active : classes.deactive)}
              >
                {el.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
