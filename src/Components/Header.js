import React from 'react'
import '../Assets/styles/Header.css';

function Header() {
  return (
    <div className="Header">
        <a className="Name" href="#">[???]</a>


        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

          <ul className="menu__box">
              <li><a className="menu__item" href="#">Home</a></li>
              <li><a className="menu__item" href="#">Services</a></li>
              <li><a className="menu__item" href="#">Contact</a></li>
              <li><a className="menu__item" href="#">About</a></li>
          </ul>
        
    </div>
  )
}

export default Header