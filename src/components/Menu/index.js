import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/BaioBioinformatics2.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} className="Logo" alt="BaioBioinformatics2" />
      </Link>
      
    </nav>
  );
}

export default Menu;
