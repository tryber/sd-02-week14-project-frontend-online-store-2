import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PagInicial from './pages/PagInicial';
import Carrinho from './pages/Carrinho';
import DetalheProduto from './pages/DetalheProduto';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PagInicial} />
        <Route exact path="/carrinho" component={Carrinho} />
        <Route path="/:id" component={DetalheProduto} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
