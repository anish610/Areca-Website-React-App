import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1>Areca Plates</h1>
          <ul class="list-item">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav >
    </>
  )
}


export default Navbar
