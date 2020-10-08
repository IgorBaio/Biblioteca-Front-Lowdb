import React from 'react';
import { LivroCardContainer } from './styles';
import {useLocation } from "react-router-dom";


function LivroCard({ livroTitle,livroCapa, livroURL, categoryColor, livroId }) {
  let location = useLocation();
  return (
    <LivroCardContainer
      id={livroId}
      url={require(`../../../../assets/img/${livroCapa}`)}
      href={location.pathname}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={livroTitle}
    />
    
  );
}

export default LivroCard;
