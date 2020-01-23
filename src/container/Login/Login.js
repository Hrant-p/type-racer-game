import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DivWithBackground from '../../components/DivWithBackground/DivWithBackground';
import img from '../../img/coder.jpeg';
import './Login.scss';

const Login = props => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  const handleChange = ({ currentTarget: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(e);
  };
  const { login, password } = formData;

  return (
    <DivWithBackground bgImage={img}>
      <div className="login-area">
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

export default Login;
