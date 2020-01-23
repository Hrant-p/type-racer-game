import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './container/Home/Home';
import GamePage from './container/GamePage/Gamepage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/game" component={GamePage} exact />
        <Route />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
