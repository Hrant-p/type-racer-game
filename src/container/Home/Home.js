import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import './Home.scss';
import bgImage from '../../img/coder.jpeg';
import DivWithBackground from '../../components/DivWithBackground/DivWithBackground';
import Game from '../Game/Game';

const Home = () => (
  <DivWithBackground bgImage={bgImage}>
    <Game />
  </DivWithBackground>
);

Home.propTypes = {
  // user: PropTypes.instanceOf(Immutable.Map).isRequired,
};

export default Home;
