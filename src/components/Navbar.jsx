import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../images/fitness.png';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img src={logo} />
      </div>
      <div className='navbar-title'>
        <h1>FitnessApp</h1>
      </div>
      <nav className='navbar-links'>
        <ul>
          <li>
            <NavLink to='/journal'>Journal</NavLink>
          </li>
          <li>
            <NavLink to='/addworkout'>Add Workout</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
