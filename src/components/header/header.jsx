import React from 'react';
import './header.css';
import {Link} from "react-router-dom";

function Header() {
  return (
      <header data-testid="header" className="header" >
        <nav className="nav">
          <li className="nav__item"> <Link title="Visit About Section" to="/about"> About </Link> </li> /
          <li className="nav__item"> <Link title="Visit About Section" to="/skills"> Skills </Link> </li> /
          <li className="nav__item"> <Link title="Visit About Section" to="/projects"> Projects </Link> </li> /
          <li className="nav__item"> <Link title="Visit About Section" to="/contact"> Contact </Link> </li>
        </nav>
      </header>
  );
}

export default Header;
