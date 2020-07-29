import React from 'react';
import Logo from '../../assets/img/Logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
        <img className="Logo" src={Logo} alt="CarlaoFlix logo" />
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
