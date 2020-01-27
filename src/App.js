import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/store';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Routes from './routing/Routes';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <Route component={Routes} />
      <Footer />
    </BrowserRouter>
  </Provider>
);

export default App;
