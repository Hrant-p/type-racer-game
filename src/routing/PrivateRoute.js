import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isAuthSelector } from '../store/selectors/userSelector';

const PrivateRoute = ({
  component: Component,
  isAuth,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      !isAuth
        ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />)
    )}
  />
);

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuth: isAuthSelector(state),
});

export default connect(mapStateToProps)(PrivateRoute);
