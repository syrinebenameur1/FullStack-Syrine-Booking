import "./navbar.css";
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="logo">Syrinebooking</Link>
        {user ? user.username :  (
          <div className="navItems">
            <button className="navButton">Register</button>
          <Link to ="/login"> <button className="navButton">Login</button></Link> 
          </div>
        ) }
      </div>
    </div>
  );
}
