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
  
  let location = useLocation();
  const [livro, setLivro] = useState(location.state);
  const [dateNow, setDateNow] = useState(new Date());
  
  const valoresIniciais = {
    nome: '',
    date: `${dateNow.getDate()}/${dateNow.getMonth()+1}/${dateNow.getFullYear()}`,
    livroId: '',
  };

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
        if(values.nome === ''){
          alert('O campo "Nome" deve ser preenchido');
        }else{
          setValues(valoresIniciais);
          pegarEmprestado(livro.id)
          alert(`${livro.titulo} Emprestado`);
          history.push('/');
        }
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
          type="input"
          name="Data de empréstimo:"
          value={values.date}
        />

        <FormField
          label="Livro:"
          inputType="input"
          type="text"
          name="livro"
          value={livro.titulo}
        />
        
        <Button as={Button} type="submit">
          Cadastrar
        </Button>

      </form>
      
    </PageDefault>
  );
}

export default CadastroEmprestimo;
