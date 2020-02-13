import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import DivWithBackground from '../../components/DivWithBackground/DivWithBackground';
import img from '../../img/coding2.jpg';
import './Login.scss';
import {
  alertSelector,
  currentUserSelector,
  errorSelector,
  isAuthSelector,
  isLoadingSelector,
} from '../../store/selectors/userSelector';
import { userLoginRequest } from '../../store/actions/userActionCreators';
import Spinner from '../../components/Spinner/Spinner';
import Error from '../../components/Error/Error';
import Alert from '../../components/Alert/Alert';
import StyledSection from '../../components/StyledSection/StyledSection';

const Login = ({
  userLoginActionCreator,
  isLoading,
  isAuth,
  alert,
  error,
}) => {
  const [formData, setFormData] = useState({ login: '', password: '' });

  const handleChange = ({ currentTarget: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const { login, password } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    userLoginActionCreator(login, password);
  };

  if (isAuth) {
    return <Redirect to="/home" />;
  }

  return (
    <DivWithBackground bgImage={img}>
      <div className="login-area">
        <form onSubmit={e => handleSubmit(e)}>
          <h3>
            Login here
          </h3>
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
            type="submit"
            value="Login"
            className="designed-btn"
          />
          <p className="form-bottom">
            {"Don't have an account? "}
            <Link to="/registration">Sign Up</Link>
          </p>
        </form>
      </div>
      <StyledSection>
        {error && <Error error={error} />}
        {alert && <Alert alert={alert} />}
        {isLoading && <Spinner />}
      </StyledSection>
    </DivWithBackground>
  );
};

Login.propTypes = {
  userLoginActionCreator: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  alert: PropTypes.string,
  error: PropTypes.string,
};

Login.defaultProps = {
  alert: null,
  error: null,
};

const mapStateToProps = state => ({
  user: currentUserSelector(state),
  isAuth: isAuthSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state),
  alert: alertSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  userLoginActionCreator: userLoginRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
