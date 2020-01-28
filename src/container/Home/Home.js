import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import './Home.scss';
import { connect } from 'react-redux';
import bgImage from '../../img/coder.jpeg';
import DivWithBackground from '../../components/DivWithBackground/DivWithBackground';
import Game from '../Game/Game';
import { currentUserSelector } from '../../store/selectors/userSelector';

const Home = ({ user }) => (
  <DivWithBackground bgImage={bgImage}>
    <Game />
  </DivWithBackground>
);

Home.propTypes = {
  user: PropTypes.instanceOf(Immutable.Map).isRequired,
};

const mapStateToProps = state => ({
  user: currentUserSelector(state)
});

export default connect(mapStateToProps, null)(Home);
