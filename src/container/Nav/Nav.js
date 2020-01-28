import React from 'react';
import PropTypes from 'prop-types';
import './Nav.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isAuthSelector } from '../../store/selectors/userSelector';
import { userSignOut } from '../../store/actions/userActionCreators';

const Nav = ({ isAuth, userSignOutActionCreator }) => {
  const handleSignOut = () => {
    userSignOutActionCreator();
    sessionStorage.removeItem('id');
  };

  return (
    <nav className="head-block">
      <ul>
        <li><Link to="/home">Home</Link></li>
        {!isAuth && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/registration">SignUp</Link>
            </li>
          </>
        )}
        <li><Link to="/about">About</Link></li>
        {isAuth && (
          <li>
            <button
              type="button"
              onClick={handleSignOut}
            >
                            Sign Out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  userSignOutActionCreator: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuth: isAuthSelector(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  userSignOutActionCreator: userSignOut
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
