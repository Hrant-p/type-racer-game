import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router';
import DivWithBackground from '../../components/DivWithBackground/DivWithBackground';
import img from '../../img/coder.jpeg';
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

const Login = ({
  userLoginActionCreator,
  user,
  isLoading,
  isAuth,
  alert,
  error,
}) => {
  const history = useHistory();
  const [formData, setFormData] = useState({ login: '', password: '' });

  const handleChange = ({ currentTarget: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const { login, password } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    userLoginActionCreator(login, password, history);
    if (!user.size) {
      setFormData({ login: '', password: '' });
    }
  };

  return (
    <DivWithBackground bgImage={img}>
      <div className="login-area">
        {isLoading && <Spinner />}
        {alert && <p>{alert}</p>}
        <form onSubmit={e => handleSubmit(e)}>
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
            className="btn-submit"
          />
        </form>
      </div>
    </DivWithBackground>
  );
};

Login.propTypes = {};

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
