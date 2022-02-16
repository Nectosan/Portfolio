import React from 'react'
import '../Assets/styles/Header.css';

function Header() {
  return (
    <div className="Header">
        <a className="Name" href="#">[???]</a>

        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
        </ul>
      
    </div>
  )
}

export default Header