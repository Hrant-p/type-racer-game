import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import './Home.scss';
import bgImage from '../../img/coder.jpeg';
import DivWithBackground from '../../components/DivWithBackground/DivWithBackground';

const Home = ({ user }) => (
    <DivWithBackground bgImage={bgImage}>
                Home
    </DivWithBackground>
);

Home.propTypes = {
  // user: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default Home;
