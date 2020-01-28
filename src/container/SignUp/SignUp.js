import React, { useState } from 'react';
import '../Login/Login.scss';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import DivWithBackground from '../../components/DivWithBackground/DivWithBackground';
import img from '../../img/sign-up.JPG';
import {
  createNewUserRequest,
  setAlert,
} from '../../store/actions/userActionCreators';
import {
  alertSelector,
  errorSelector,
  isAuthSelector,
  isLoadingSelector,
} from '../../store/selectors/userSelector';
import Spinner from '../../components/Spinner/Spinner';

const SignUp = ({
  isAuth,
  createNewUserActionCreator,
  setAlertActionCreator,
  isLoading,
  alert,
  error
}) => {
  const [formData, setFormData] = useState({
    nickname: '',
    login: '',
    password: '',
    password2: '',
  });

  const handleChange = ({ currentTarget: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };
  const {
    nickname, login, password, password2,
  } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlertActionCreator("Password doesn't match");
    } else {
      setAlertActionCreator(null);
      const newUser = { nickname, login, password };
      createNewUserActionCreator(newUser);
    }
  };

  if (isAuth) {
    return <Redirect to="/home" />;
  }

  return (
    <DivWithBackground bgImage={img}>
      <div className="login-area">
        <form onSubmit={e => handleSubmit(e)}>
          {isLoading && <Spinner />}
          {alert && <p>{alert}</p>}
          {error && <p>{error}</p>}
          <input
            className="login-field"
            type="text"
            placeholder="Nickname"
            name="nickname"
            value={nickname}
            onChange={e => handleChange(e)}
            required
          />
          <input
            className="login-field"
            type="email"
            placeholder="E-mail"
            name="login"
            value={login}
            onChange={e => handleChange(e)}
            required
          />
          <input
            className="login-field"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => handleChange(e)}
            minLength="6"
            required
          />
          <input
            className="login-field"
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => handleChange(e)}
            minLength="6"
            required
          />
          <input
            type="submit"
            value="Login"
            className="btn-submit"
          />
          <p className="">
            Already have an account?
            <Link to="/login">Sign In</Link>
          </p>
        </form>
      </div>
    </DivWithBackground>
  );
};

SignUp.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  setAlertActionCreator: PropTypes.func.isRequired,
  createNewUserActionCreator: PropTypes.func.isRequired,
  alert: PropTypes.string,
  error: PropTypes.string,
};

SignUp.defaultProps = {
  alert: null,
  error: null
};

const mapStateToProps = state => ({
  isLoading: isLoadingSelector(state),
  isAuth: isAuthSelector(state),
  alert: alertSelector(state),
  error: errorSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  createNewUserActionCreator: createNewUserRequest,
  setAlertActionCreator: setAlert,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
