import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails'
import Cadastro from './pages/Cadastro/Emprestimo'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/BookDetails" component={BookDetails} />
      <Route path="/Cadastro" component={Cadastro} />
      <Route component={Pagina404} />


    </Switch>

  </BrowserRouter>,

  document.getElementById('root')
);