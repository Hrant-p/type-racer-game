import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './container/Home/Home';
import GamePage from './container/GamePage/GamePage';
import Login from './container/Login/Login';
import SignUp from './container/SignUp/SignUp';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/sign-up" component={SignUp} exact />
        <Route path="/game" component={GamePage} exact />
        <Route path="/about" component={About} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
