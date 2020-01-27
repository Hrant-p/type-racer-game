import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../container/Home/Home';
import Login from '../container/Login/Login';
import SignUp from '../container/SignUp/SignUp';
import About from '../components/About/About';
import NotFound from '../components/NotFound/NotFound';

const Routes = () => (
  <Fragment>
    <Switch>
      <PrivateRoute path="/home" component={Home} exact />
      <Route path="/(login||)" component={Login} exact />
      <Route path="/registration" component={SignUp} exact />
      <Route path="/about" component={About} exact />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
);

export default Routes;
