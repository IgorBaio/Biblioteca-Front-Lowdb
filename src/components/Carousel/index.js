import React from 'react';
import { LivroCardGroupContainer, Title, ExtraLink } from './styles';
import LivroCard from './components/LivroCard';
import Slider, { SliderItem } from './components/Slider';
import { Link } from "react-router-dom";
function Carrousel({
  ignoreFirstLivro,
  category,
}) {
  const livros = category;
  
  return (
    <LivroCardGroupContainer>
      
      <Slider>
        {livros?.map((livro, index) => {
          if (ignoreFirstLivro && index === 0) {
            return null;
          }

          return (
            <SliderItem key={livro.titulo}>
              <Link to={
                                {pathname:'/BookDetails',
                                state: livro
                              }
                            } >
                <LivroCard
                  livroTitle={livro.titulo}
                  livroCapa={livro.capa}
                  livroURL={'/BookDetails'}
                  livroId ={livro.id}
                />
              </Link>
                
            </SliderItem>
          );
        })}
      </Slider>
    </LivroCardGroupContainer>
  );
}

export default Carrousel;
