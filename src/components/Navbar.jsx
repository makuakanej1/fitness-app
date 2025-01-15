import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';
import logo from '../images/fitness.png';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-logo">
            <img src={logo}/>
        </div>
        <div className="navbar-title">
            <h1>FitnessApp</h1>
        </div>
        <div className="navbar-links">
            <ul>
                <li><NavLink to='/mainpage'>Home</NavLink></li>
                <li><NavLink to='/journal'>Journal</NavLink></li>
                <li><NavLink to='/addworkout'>Add Workout</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar