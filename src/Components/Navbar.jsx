import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <p>UNREAL ENGINE</p>
      </div>
      </Link>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#media">Media </a></li>
        <li><a href="#news">News</a></li>
        <li><Link to="/purchase">Purchase</Link></li>
        <li><a href="#social-media">Social Media</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
