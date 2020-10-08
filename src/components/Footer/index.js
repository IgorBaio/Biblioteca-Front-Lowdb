import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/BaioBioinformatics.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/IgorBaio">
      <img src={Logo} className="Logo" alt="BaioBioinformatics"/>
      </a>
      <p>
        Biblioteca criada para testes.
      </p>
    </FooterBase>
  );
}

export default Footer;
