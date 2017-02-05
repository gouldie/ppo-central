import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App'
import PokemonList from './components/PokemonList'
import Pokemon from './components/Pokemon/Pokemon'
import Home from './components/Home'


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="pokemon" component={PokemonList}/>
    <Route path="pokemon/:pokemon" component={Pokemon}/>

    <Route path="*" component={App}/>
  </Route>
);


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
