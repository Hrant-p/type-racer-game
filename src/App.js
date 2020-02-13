import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/store';
import Nav from './container/Nav/Nav';
import Footer from './components/Footer/Footer';
import RoutesWithLazyLoading from './RoutesWithLazyLoading/RoutesWithLazyLoading';
import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <Route component={RoutesWithLazyLoading} />
      <Footer />
    </BrowserRouter>
  </Provider>
);

export default App;
