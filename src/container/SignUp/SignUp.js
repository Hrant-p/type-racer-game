import React, { useState } from 'react';
import '../Login/Login.scss';
import PropTypes from 'prop-types';
import DivWithBackground from '../../components/DivWithBackground/DivWithBackground';
import img from '../../img/sign-up.JPG';

const SignUp = props => {
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

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(nickname, login, password, password2);
  };

  return (
    <DivWithBackground bgImage={img}>
      <div className="login-area">
        <form onSubmit={e => handleSubmit(e)}>
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
        </form>
      </div>
    </DivWithBackground>
  );
};

SignUp.propTypes = {

};

export default SignUp;
