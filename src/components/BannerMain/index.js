import React from 'react';
import LivroIframeResponsive from './components/LivroIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';
import Button from '../Button';
import { Link, useHistory } from 'react-router-dom';
import LivroService from '../../service/livros.service'

export default function BannerMain({
  livro
}) {
  const history = useHistory();

  const devolverLivroEmprestado = async (id) => {
    let res = await LivroService.devolver(id);
    return res;
  }

  const removeBook = () => {
    debugger;
    let msg = window.confirm('Deseja mesmo devolver?');
    if(msg){
      livro = devolverLivroEmprestado(livro.id)
      history.push('/');
    }
  }

  if(livro != null)
    return (
      <BannerMainContainer backgroundImage={livro.capa}>
        <ContentAreaContainer>
          <ContentAreaContainer.Item>
            <ContentAreaContainer.Title>
              {livro.titulo}
            </ContentAreaContainer.Title>

            <ContentAreaContainer.Description>
              {livro.descricao}
            </ContentAreaContainer.Description>
            <ContentAreaContainer.Item>
            {livro.emprestimo ? 
            <Button onClick={()=>removeBook()} className="ButtonLink" >Devolver Livro</Button> :
          <Button as={Link} to={{pathname:'/Cadastro',
          state: livro
        }} className="ButtonLink" >Pegar Livro</Button>  
            }
              
            </ContentAreaContainer.Item>
          </ContentAreaContainer.Item>
          
          <ContentAreaContainer.Item>
            <LivroIframeResponsive
              Capa = {livro.capa}
            />

          </ContentAreaContainer.Item>
        </ContentAreaContainer>
      </BannerMainContainer>
    );

    else
      return null;
}
