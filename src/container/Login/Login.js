import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import DivWithBackground from '../../components/DivWithBackground/DivWithBackground';
import img from '../../img/coder.jpeg';
import './Login.scss';
import {
  allUsersSelector, errorSelector, isAuthSelector, isLoadingSelector
} from '../../store/selectors/userSelector';
import { getAllUsersRequest } from '../../store/actions/userActionCreators';
import Spinner from '../../components/Spinner/Spinner';

const Login = ({
  getAllUsersActionCreator, allUsers, isLoading, isAuth, error,
}) => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  const handleChange = ({ currentTarget: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const { login, password } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    // const userId = allUsers.getIn([login, 'login']);
    // sessionStorage.setItem('id', userId);
  };

  useEffect(() => {
    getAllUsersActionCreator();
  }, [getAllUsersActionCreator]);

  return (
    <DivWithBackground bgImage={img}>
      <div className="login-area">
        {isLoading && <Spinner />}
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
  allUsers: allUsersSelector(state),
  isAuth: isAuthSelector(state),
  isLoading: isLoadingSelector(state),
  error: errorSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllUsersActionCreator: getAllUsersRequest,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
