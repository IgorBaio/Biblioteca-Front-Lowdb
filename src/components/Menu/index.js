import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/BaioSystems.gif';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="BaioSystems" />
      </Link>
      
    </nav>
  );
}

export default Menu;
