import "./navbar.css"
import React from 'react';
import {  Link } from 'react-router-dom';


export default function navbar() {
  return (
    <div className="navbar">
        <div className="navContainer">
            < Link to="/" className="logo">Syrinebooking</Link>
        <div className="navItems">
        <button className="navButton">Register</button>
        <button className="navButton">Login</button>
        </div>
        </div>

    </div>
  )
}
