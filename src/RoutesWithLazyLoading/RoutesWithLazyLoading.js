import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../routing/PrivateRoute';
import Spinner from '../components/Spinner/Spinner';

const Home = lazy(() => import('../container/Home/Home'));
const Login = lazy(() => import('../container/Login/Login'));
const SignUp = lazy(() => import('../container/SignUp/SignUp'));
const About = lazy(() => import('../components/About/About'));
const NotFound = lazy(() => import('../components/NotFound/NotFound'));

const RoutesWithLazyLoading = () => (
    <>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <PrivateRoute path="/home" component={Home} exact />
          <Route path="/(login||)" component={Login} exact />
          <Route path="/registration" component={SignUp} exact />
          <Route path="/about" component={About} exact />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
);

export default RoutesWithLazyLoading;
