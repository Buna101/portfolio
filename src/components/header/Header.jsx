import React from "react";
import "./Header.css";
import "../../utils.css";

function Header() {
  return (
    <div className='header container'>
      <nav>
        <ul className='header__menu'>
          <li>
            <a className='header__link' href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='header__link' href='#work'>
              Work
            </a>
          </li>
          <li>
            <a className='header__link' href='#contact'>
              Contact
            </a>
          </li>
          <li className='header__line'></li>
          <li className='header__btn'>
            <a className='btn'>Resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
