/* eslint-disable linebreak-style */
/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link, Redirect, useLocation, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import LivroService from '../../../service/livros.service'

function CadastroEmprestimo() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  let location = useLocation();
  const [livro, setLivro] = useState(location.state);
  const [emprestimos, setEmprestimos] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const pegarEmprestado = async (id) => {
    let res = await LivroService.emprestimo(id);
  }

  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor,
    });
  };


  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  const history = useHistory();
  return (
    <PageDefault>
      <h1>
        Cadastro de Empréstimo:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setValues(valoresIniciais);
        // let livrosArray = []

        pegarEmprestado(livro.id)

        // const livrosEmprestados = localStorage.getItem('livros');
        // if(livrosEmprestados !== null)
          // livrosArray = JSON.parse(livrosEmprestados);
         
        // livrosArray.push(livro.id)
        // localStorage.setItem("livros",JSON.stringify(livrosArray))


        
        history.push('/');
      }}
      >

        <FormField
          label="Nome:"
          inputType="input"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Data de empréstimo:"
          inputType="date"
          type="date"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Livro:"
          inputType="number"
          type="number"
          name="livro"
          value={location.state.id}
          onChange={handleChange}
        />
        
        
        <Button as={Button} type="submit">
          Cadastrar
        </Button>

        
      </form>
      
    </PageDefault>
  );
}

export default CadastroEmprestimo;
