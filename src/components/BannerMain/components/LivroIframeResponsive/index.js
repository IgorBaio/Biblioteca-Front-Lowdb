import React from 'react';

import { LivroContainer } from './styles';

function YouTubeIframeResponsive({ Capa }) {
  return (
    <LivroContainer>
        <img src={require(`../../../../assets/img/${Capa}`)} alt="Capa"  width="80%" height="30%"/>;
      
    </LivroContainer>
  );
}

export default YouTubeIframeResponsive;
