import React from 'react';
import PropTypes from 'prop-types';
import './Nav.scss';
import {Link} from "react-router-dom";

const Nav = props => {
    return (
        <nav className="head-block">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/sign-up">Sign-Up</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

Nav.propTypes = {};

export default Nav;
