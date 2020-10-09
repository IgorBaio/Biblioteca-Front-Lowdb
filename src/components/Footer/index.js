import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/BaioSystems.gif'

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/IgorBaio">
      <img src={Logo} className="Logo" alt="BaioSystems"/>
      </a>
    </FooterBase>
  );
}

export default Footer;
