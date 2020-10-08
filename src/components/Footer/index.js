import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/BaioSystems.gif'

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/IgorBaio">
      <img src={Logo} className="Logo" alt="BaioSystems"/>
      </a>
      <p>
        Biblioteca criada para testes.
      </p>
    </FooterBase>
  );
}

export default Footer;
